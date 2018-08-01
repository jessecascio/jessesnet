var params = {
  TableName: 'session',
  Key: { username : 'johnnyB' },
  UpdateExpression: 'SET #sid = :sid, #activity = :ms',
  ExpressionAttributeNames: {'#sid' : 'sid', '#activity' : 'activity'},
  ExpressionAttributeValues: {
    ':sid' : 'yo',
    ':ms' : 45
  }
};

docClient.update(params, function(err, data) {
    if (err) ppJson(err); 
    else ppJson(data); 
});
