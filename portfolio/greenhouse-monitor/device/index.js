const AWS = require('aws-sdk');

const dbClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
  endpoint: process.env.DB_ENDPOINT || 'https://dynamodb.us-west-2.amazonaws.com',
  region: 'us-west-2'
});

exports.handler = async (event, context, callback) => {
  const device_query = {
    TableName: 'greenhouse_devices'
  };

  let devices = [];

  try {
    const response = await dbClient.scan(device_query).promise();
    if (response && response.Items) {
      devices = response.Items.map(d => {
        return d.device_id;
      });
    }
  } catch (e) {
    return callback(e);
  }

  if (!devices.length) {
    console.log('No Available Devices');
    return callback(null);
  }

  const promises = devices.map(device_id => {
    return new Promise(async (resolve, reject) => {
      const measurement_query = {
        TableName: 'greenhouse_measurements',
        Item: {
          device_id,
          temperature: Math.floor(Math.random() * (80 - 60)) + 60,
          humidity: Math.floor(Math.random() * (95 - 65)) + 65,
          co2: Math.floor(Math.random() * (1400 - 800)) + 800,
          iso: (new Date()).toISOString()
        }
      };

      dbClient.put(measurement_query, (err, response) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  });

  const chunks = [];
  for (let i=0; i<promises.length; i += 10) {
    chunks.push(promises.slice(i, i + 10));
  }

  chunks.forEach(async (chunk) => {
    try {
      await Promise.all(chunk);
    } catch (e) {
      return callback(e);
    }
  });

  console.log(`Added ${devices.length} Metric(s)!`);
  return callback(null);
};
