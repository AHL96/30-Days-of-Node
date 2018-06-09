var request = require('request');
var fs = require('fs');

var access_token = "WRITE_YOUR_ACCESS_TOKEN_HERE";

var filename = '44.png';

var content = fs.readFileSync(filename);

options = {
    method: "POST",
    url: 'https://content.dropboxapi.com/2/files/upload',
    headers: {
        "Content-Type": "application/octet-stream",
        "Authorization": "Bearer " + access_token,
        "Dropbox-API-Arg": "{\"path\": \"/YOUR_PATH_TO_FOLDER/" + filename + "\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
    },
    body: content
};

request(options, function (err, res, body) {
    console.log("Err : " + err);
    console.log("res : " + res);
    console.log("body : " + body);
})