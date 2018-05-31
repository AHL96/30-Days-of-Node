const app = require('express')()
const server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(3000)
console.log('server listening at port 3000');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/admin.html')
})

io.on('connection', (socket) => {
    // socket.emit('Welcome', { data: 'welcome' })

    socket.on('new', (data) => {
        console.log('About to upload quote');
        io.sockets.emit('next', { data: data })

    })
})