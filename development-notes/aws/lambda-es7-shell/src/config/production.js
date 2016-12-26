
module.exports.values = {
  aws: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  },
  dynamodb: {
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
  }
};
