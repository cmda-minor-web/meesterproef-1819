
const app = require('../app')
const http = require('http').Server(app)


// Declare socket api
const io = require('socket.io')(http)



////////// SOCKET IO CODE //////////
// setup socket.io
const serverSocket = function(io){
    io.on('connection', function (socket) {
        console.log('a user connected');
        console.log(socket.id + '  = socket id')


        // Send user disconnected log + socket.id
        socket.on('disconnect', function () {
            console.log('user disconnected');

        });
}
    )};
    
serverSocket(io)


module.exports = serverSocket;