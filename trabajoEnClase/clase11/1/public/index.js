const socket = io() // Ya podemos empezar a usar los sockets desde el cliente :)


/*cuando haya un objeto llamado 'Mensajillo', ejecutá este callback. El callback tiene la data,
que consiste en el segundo parámetro del socket.emit en el server.js 
("Buen día vecinillo en este caso)*/
socket.on('Mensajillo', (data) => {
    alert(data)
    socket.emit('notificacion', 'Mensaje recibido exitosamente')
})  

