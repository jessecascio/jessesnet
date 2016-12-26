
import AWS from 'aws-sdk';

/**
 * s3
 */
exports.register = (server, options, next) => {
  AWS.config.update(server.app.config.aws);
  const awsS3 = new AWS.S3({httpOptions: {timeout: 10000}});

  server.expose('get', (bucket, key) => {
    return new Promise((resolve, reject) => {
      let params = {Bucket: bucket, Key: key};

      try {
        awsS3.getObject(params, (err, data) => {
          if (err) {
            return reject(err);
          }

          try {
            return resolve(data.Body.toString());
          } catch (e) {
            return reject(e);
          }
        });
      } catch (e) {
        return reject(e);
      }
    });
  });

  return next();
};


exports.register.attributes = {
  name: 's3',
  version: '1.0.0',
  multiple: false // single shared instance
};
