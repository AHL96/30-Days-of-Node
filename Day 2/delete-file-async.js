var fs = require('fs');
var filename = 'newData.txt';

fs.unlink(filename, (err) => {
  if (err) {
    throw err;
  }
  console.log('File deleted successfully');
})