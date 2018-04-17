
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: "<ACCESS_KEY_ID>",
  secretAccessKey: "<SECRET_ACCESS_KEY>"
});

const s3 =  new AWS.S3();

(async () => {
  let ps = {Bucket: 'your-bucket-name', Key: 'secreto.json'};

  try {
    let o = await s3.getObject(ps).promise();
    console.log(o.Body.toString());
  } catch (e) {
    console.log(e);
  }
})();
