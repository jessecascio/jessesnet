
import AWS from 'aws-sdk';
const S3 = new AWS.S3({httpOptions: {timeout: 10000}});

export function get(aws, Bucket, Key) {
  AWS.config.update(aws);

  const ps = { Bucket, Key };

  return new Promise(async (resolve, reject) => {
      try {
        const data = await S3.getObject(ps).promise();
        return data && data.Body ? resolve(data.Body.toString()) : reject(new Error());
      } catch (e) {
        return reject(e);
      }
  });
}

