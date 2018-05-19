var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  console.log('Port Number : 3000');
  res.writeHead(200, {
    'Conent-Type': 'video/mp4'
  });
  fs.exists('video.mp4', function(exists) {
    if (exists) {
      var rstream = fs.createReadStream('video.mp4');
      rstream.pipe(res);
    } else {
      res.end('It\'s a 404 error');
    }
  });

}).listen(3000);