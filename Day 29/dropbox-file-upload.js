var request = require('request');
var fs = require('fs');

var access_token = "access_token";

var filename = 'test.txt';

var content = fs.readFileSync(filename);
options = {
    method: "POST",
    url: 'https://content.dropboxapi.com/2/files/upload',
    headers: {
        "Content-Type": "application/octet-stream",
        "Authorization": "Bearer " + access_token,
        "Dropbox-API-Arg": "{\"path\": \"/30\ Days\ of\ Node/ Day\ 29/" + filename + "\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
    },
    body: content
};

request(options, function (err, res, body) {
    console.log("Err : " + err);
    console.log("res : " + res);
    console.log("body : " + body);
})