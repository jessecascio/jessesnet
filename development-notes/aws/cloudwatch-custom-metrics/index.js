
const AWS = require("aws-sdk"); 
const cw = new AWS.CloudWatch({
  region: "us-west-1"
});

// create a single entry with no dimensions to monitor the number of
// status code responses from an API
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

// track the latency for a particular code allowing for metrics
// such as average, p90, etc.
const c = {
  "Namespace": "SystemMetrics",
  "MetricData": [{
    "MetricName": "APILatency",
    "Dimensions": [{
      "Name": "Code",
      "Value": "200"
    }],
    "Timestamp": new Date().toISOString(),
    "Value": 234
  }]
};

// create a multiple dimension metric, when graphing each dimension is apart
// of the query, so you may need to "bucket" the metrics for useful graphs
const latency = 245;
const d = {
  "Namespace": "SystemMetrics",
  "MetricData": [{
    "MetricName": "APICalls",
    "Dimensions": [{
      "Name": "API",
      "Value": "Twitter"
    },{
      "Name": "Code",
      "Value": "200"
    }],
    "Timestamp": new Date().toISOString(),
    "Value": 1
  }]
};

(async () => {
  try {
    await cw.putMetricData(d).promise();
  } catch (e) {
    console.log(e);
  }
})();
