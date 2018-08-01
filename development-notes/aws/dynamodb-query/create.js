var params = {
    TableName: 'company',
    KeySchema: [ 
        { 
            AttributeName: 'id',
            KeyType: 'HASH',
        }
    ],
    AttributeDefinitions: [ 
        {
            AttributeName: 'id',
            AttributeType: 'S', 
        }
    ],
    ProvisionedThroughput: { 
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1, 
    }
};

var params = {
    TableName: 'entity',
    KeySchema: [ 
        { 
            AttributeName: 'id',
            KeyType: 'HASH'
        }
    ],
    AttributeDefinitions: [ 
        {
            AttributeName: 'id',
            AttributeType: 'N' 
        },
    ],
    ProvisionedThroughput: { 
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1, 
    }
};

var params = {
  TableName: 'entity',
  KeySchema: [
    {
      AttributeName: 'DocId',
      KeyType: 'HASH',
    },
    {
      AttributeName: 'EntryTime',
      KeyType: 'RANGE',
    },
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'entity-source',
      KeySchema: [
        {
          AttributeName: 'SourceId',
          KeyType: 'HASH'
        }
      ],
      Projection: {
        ProjectionType: 'ALL'
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 100,
      }
    }
  ],
    AttributeDefinitions: [
    {
      AttributeName: 'DocId',
      AttributeType: 'S',
    },
    {
      AttributeName: 'EntryTime',
      AttributeType: 'N',
    },
    {
      AttributeName: 'SourceId',
      AttributeType: 'S',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};

dynamodb.createTable(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});