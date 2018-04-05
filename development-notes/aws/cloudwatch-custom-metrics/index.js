
const AWS = require('aws-sdk'); 
const cw = new AWS.CloudWatch({
  region: "us-west-1"
});

// create a single entry with no dimensions
const a = {
  "Namespace": "SystemMetrics",
  "MetricData": [{
    "MetricName": "APIStatus200",
    "Timestamp": new Date().toISOString(),
    "Value": 1
  }]
};

// create a single entry with API status as the dimension 
// same outcome as above, just looks a bit different in UI
const b = {
  "Namespace": "SystemMetrics",
  "MetricData": [{
    "MetricName": "APIStatus",
    "Dimensions": [{
      "Name": "Code",
      "Value": "200"
    }],
    "Timestamp": new Date().toISOString(),
    "Value": 1
  }]
};

// create a multiple dimension metric, when graphing each dimension is apart
// of the query, so you'll likely want to "bucket" your metrics somehow
const latency = 245;
const c = {
  "Namespace": "SystemMetrics",
  "MetricData": [{
    "MetricName": "APICall",
    "Dimensions": [{
      "Name": "Code",
      "Value": "200"
    },
    {
      "Name": "Latency",
      "Value": Math.floor(latency/100) * 100)
    }],
    "Timestamp": new Date().toISOString(),
    "Value": 1
  }]
};

(async () => {
  try {
    await cw.putMetricData(c).promise();
  } catch (e) {
    console.log(e);
  }
})();
