const { error } = require('console')
const fs = require('fs')

// OPERACIONES SÍNCRONAS--------------------------------------------------------------------------------------------------------------------


//                                                              LEER UN ARCHIVO
// // leyendo archivo de manera síncrona
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data) // output: Hola, me llamo pepinillo!

// //Si omitieramos el segundo parámetro:
// const data = fs.readFileSync('./test-input-sync.txt')
// console.log(data) // output: buffer binario
// console.log(data.toString()) // output: Hola, me llamo pepinillo!

//                                                          SOBREESCRIBIR UN ARCHIVO

// fs.writeFileSync('./pruebirijilla.txt', 'Esto es una prueba')
// // Si existe un archivo "pruebirijilla.txt" en esa ruta, lo reemplaza. Si no existe, lo crea. En ambos casos el valor es 'Esto es una prueba'

//                                                   AGREGAR CONTENIDO A UN ARCHIVO YA EXISTENTE

// fs.appendFileSync('pruebirijilla.txt', 'esto es un agregado')
// //se entiende todo. Si no existe ya el archivo, también crea uno nuevo.

//                                                              MANEJANDO ERRORES

// // esto así como está me rompe la ejecución del programa, no puedo hacer nada más
// const data = fs.readFileSync('pruebirisjdasaddasdailla.txt', 'utf-8')
// console.log(data)                                                           
// console.log('Hola') // nunca llega a consologuearse    

// En cambio, si usamos el try-catch:
// try {
//     const data = fs.readFileSync('pruebirisjdasaddasdailla.txt', 'utf-8')
//     console.log(data)
// } catch (err) {
//     console.error(`Acá está el error: ${err}`)
//     // throw new Error(error)
// }
// console.log('no importa porque lo capturé') // como capturamos el error, el programa sigue con la ejecución y esto se consologuea

//                                                      LEER CON PROMESA
async function leerAA() {
    try {
        const contenido = await fs.promises.readFile('tesst.txt', 'utf-8')
        console.log(contenido)
        
    } catch (error) {
        console.error('Hubo un error: ' + error);
        throw new Error(error)
    }
}

leerAA()