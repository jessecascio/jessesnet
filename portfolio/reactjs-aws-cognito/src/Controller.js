
import { CognitoUserPool } from 'amazon-cognito-identity-js';

export default class Controller {

  static user() {
    const poolData = {
      UserPoolId : 'us-west-2_mRRbRCxn3', 
      ClientId : '5mbim4h4jl5r9371c821g6inru' 
    };
    const userPool = new CognitoUserPool(poolData);
    return userPool.getCurrentUser();
  }
}