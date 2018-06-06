var cp = require('child_process');

for (var i = 1; i < 6; i++) {
    // console.log(i)
    var worker = cp.spawn('node', ['slave.js', i]);

    worker.stdout.on('data', (data) => {
        console.log('Value of Stdout : ' + data);
    });

    worker.stderr.on('data', (data) => {
        console.log('stderr: ' + data);
    });

    worker.on('close', (code) => {
        //console.log("Exit code : " + code);
        console.log('child process exited with code ' + code);
    });
}