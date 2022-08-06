const socket = io();
socket.on('messages', data => console.log(data))


/* Esta función se encarga de inyectar los mensajes en el HTML. Itera sobre los datos que llegan 
a traves del socket con la función map, y para cada elemento del array rellena una plantilla HTML
con el nombre del autor y el texto del mensaje de cada elemento. */
function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) { render(data); });


/* La función recoge el valor de los inputos del autor y el texto, y los envía por el socket con el
mensaje 'new--message' para que lo escuche el servidor */
function addMessage(e) {
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    return false; // "para cortar la ejecución". no entiendo la utilidad francamente
}
