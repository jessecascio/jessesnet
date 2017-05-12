import React, { Component } from 'react';
import AWS from 'aws-sdk';
import Controller from './../Controller';
import apigClientFactory from 'aws-api-gateway-client';

class Secure extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const cognitoUser = Controller.user();

    if (cognitoUser) {
      this.setState({user: cognitoUser}, () => {
        this.view();
      });
    } else {
      this.setState({error: 'Not Signed In'});
    }
  }

  view() {
    if (!this.state.user) {
      this.setState({error: 'Not Signed In'});
      return; 
    }
    
    this.setState({error: false});
    
    this.state.user.getSession((err, result) => {
      if (result) {

        AWS.config.update({region:'us-east-1'});
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:abd5999a-898b-4bfe-a137-6910d8dbc384',
            Logins : {
              'cognito-idp.us-east-1.amazonaws.com/us-east-1_kvwQVUn9E' : result.getIdToken().getJwtToken()
            }
        });

        AWS.config.credentials.get(() => {
          const accessKeyId = AWS.config.credentials.accessKeyId;
          const secretAccessKey = AWS.config.credentials.secretAccessKey;
          const sessionToken = AWS.config.credentials.sessionToken;
          
          this.show(accessKeyId, secretAccessKey, sessionToken);
        });
      }
    });
  }

  async show(accessKeyId, secretAccessKey, sessionToken) {
    const config = {
      invokeUrl:'https://5v4wc2z71j.execute-api.us-east-1.amazonaws.com',
      accessKey: accessKeyId,
      secretKey: secretAccessKey,
      sessionToken: sessionToken, 
      region: 'us-east-1'
    };
    const apigClient = apigClientFactory.newClient(config);

    const additionalParams = {        
      headers: {
        'x-amz-security-token': sessionToken
      }         
    };

    try {
      const r = await apigClient.invokeApi({}, '/v1/secure', 'GET', additionalParams);
      this.setState({ data: r.data.join(' - ') })
    } catch (e) {
      this.setState({ error: e.message });
    }
    
  }

  render() {
    if (this.state.error) {
      return (
        <div className="App">
          <p style={{color: 'red'}}>ERROR: {this.state.error.toUpperCase()}</p>
        </div>
      );
    } else if (this.state.data) {
      return (
        <div className="App">
          <p><strong>DATA:</strong> {this.state.data}</p>
        </div>
      ); 
    }
    
   return (
      <div className="App">
        <p style={{color: 'green'}}>LOADING ....</p>
      </div>
    );
  }
}

export default Secure;
