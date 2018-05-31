const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(3000)
console.log('Server listen at port 3000');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/css-color.html')
})

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/css-color-admin.html')
})

io.on('connection', (socket) => {

    socket.on('admin', (data) => {
        console.log(data);
        console.log('about to broadcast');
        io.sockets.emit('color', { data: data })
    })

})
