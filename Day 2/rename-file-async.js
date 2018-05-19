var fs = require('fs');

fs.rename('message.txt', 'new_data.txt', (err) => {
  if (err) {
    throw err;
  }
  console.log('File renamed');
})

console.log('This method is Asynchronous');