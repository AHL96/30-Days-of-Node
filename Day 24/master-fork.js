var cp = require('child_process')
for (let i = 0; i < 6; i++) {
    var worker = cp.fork('slave.js', [i])

    worker.on('close', (code) => {
        console.log('child process exited with code ' + code)
    })
}