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

        AWS.config.update({region:'us-west-2'});
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-west-2:aa94bd82-c85a-4af4-b639-b50e5ddd2fb1',
            Logins : {
              'cognito-idp.us-west-2.amazonaws.com/us-west-2_mRRbRCxn3' : result.getIdToken().getJwtToken()
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
      invokeUrl:'https://619uvq457l.execute-api.us-west-2.amazonaws.com',
      accessKey: accessKeyId,
      secretKey: secretAccessKey,
      sessionToken: sessionToken, 
      region: 'us-west-2'
    };
    const apigClient = apigClientFactory.newClient(config);

    const additionalParams = {        
      headers: {
        'x-amz-security-token': sessionToken,
        'x-api-key': 'Vj67IeLvFy5GslGLNZOwI62yPkqcGuwT125sUx3s'
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
