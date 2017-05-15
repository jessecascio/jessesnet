var http = require('http')  

// curl localhost:3000
var requestHandler = (request, response) => {  
  var r;

  if (request.url === '/stream') {
    var stream = require('fs').createReadStream('./file.txt')
    .on('open', function () {

      stream
        .pipe(require('crypto').createCipher('aes192', 'shhhh-secret'))
        .pipe(response);
    });

  } else {
    r = require('fs').readFileSync('./file.txt', 'utf-8');
    response.end(r);
  }
}

var server = http.createServer(requestHandler)
server.listen(3000, (err) => {  
  console.log('server is listening on 3000')
});