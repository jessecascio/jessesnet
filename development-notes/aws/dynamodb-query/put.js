var params = {
  TableName: 'entity',
  Item: {
    id: 'c0164be5d11af263edae9b63b7a93e4c',
    temperature: 80,
    humidity: 78,
    co2: 1500
  }
};

docClient.put(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});