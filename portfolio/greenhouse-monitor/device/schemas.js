/**
 * CREATE
 */
var params = {
  TableName: 'greenhouse_devices',
  KeySchema: [ 
      { 
          AttributeName: 'device_id',
          KeyType: 'HASH',
      }
  ],
  AttributeDefinitions: [ 
      {
          AttributeName: 'device_id',
          AttributeType: 'S', 
      }
  ],
  ProvisionedThroughput: { 
      ReadCapacityUnits: 1, 
      WriteCapacityUnits: 5, 
  }
};

var params = {
  TableName: 'greenhouse_measurements',
  KeySchema: [ 
      { 
          AttributeName: 'device_id',
          KeyType: 'HASH',
      },
      { 
        AttributeName: 'iso',
        KeyType: 'SORT',
    },
  ],
  AttributeDefinitions: [ 
      {
          AttributeName: 'device_id',
          AttributeType: 'S', 
      },
      {
        AttributeName: 'iso',
        AttributeType: 'S', 
    }
  ],
  ProvisionedThroughput: { 
      ReadCapacityUnits: 1, 
      WriteCapacityUnits: 5, 
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err) ppJson(err); // an error occurred
  else ppJson(data); // successful response
});

/**
 * LIST
 */
var params = {
  Limit: 0
};

dynamodb.listTables({}, function(err, data) {
  if (err) ppJson(err); // an error occurred
  else ppJson(data); // successful response
});

/**
 * DELETE
 */
var params = {
  TableName: 'greenhouse_measurements'
};

dynamodb.deleteTable(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});

/**
 * SCAN
 */
var params = {
  TableName: 'greenhouse_measurements'
};

dynamodb.scan(params, function(err, data) {
  if (err) ppJson(err); // an error occurred
  else ppJson(data); // successful response
});

/**
 * PUT
 */
var params = {
  TableName: 'greenhouse_devices',
  Item: {
    device_id: 'c0164be5d11af263edae9b63b7a93e4c',
    alias: 'Garden Center'
  }
};

var params = {
  TableName: 'greenhouse_measurements',
  Item: {
    device_id: 'c0164be5d11af263edae9b63b7a93e4c',
    temperature: 80,
    humidity: 78,
    co2: 1500
  }
};

docClient.put(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});