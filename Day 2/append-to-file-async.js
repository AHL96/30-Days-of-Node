var fs = require('fs')
new_data = "This is data that will be appended to the end of the file.";

fs.appendFile('input.txt', new_data, (err) => {
  if (err) {
    throw err;
  }
  console.log('The content was appened successfully');
})