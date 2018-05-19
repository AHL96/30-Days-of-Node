var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  console.log('Port Number : 3000');
  res.writeHead(200, {
    'conent-Type': 'audio/mp3'
  });
  fs.exists('audio.mp3', (exists) => {
    if (exists) {
      var rstream = fs.createReadStream('audio.mp3');
      rstream.pipe(res);
    } else {
      res.end('Its a 404');
    }
  })

}).listen(3000);