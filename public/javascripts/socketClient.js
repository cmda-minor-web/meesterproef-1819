console.log('accessed socket Client')

let socket = io()
socket.emit('request')



// const socket = io.connect(window.location.hostname + ':' + 3000) 