const fs = require('fs')
const promises = require('fs').promises
let arrayProductos = []

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName
    }

    //Guarda objetos y asigna id
    async save(object) {
        arrayProductos.push(object)
        object.id = arrayProductos.indexOf(object)

        try {
            await fs.promises.writeFile('objetos.txt', JSON.stringify(arrayProductos))

        } catch (error) {
            console.error('Hubo un error' + error)
        }
        return object.id
    }

    
    //Trae el objeto según el Id ingresado
    getById(number) {
        async function buscaPorId () {
            try {
                const data = await fs.promises.readFile('objetos.txt');
                const parsedData = JSON.parse(data)
                const correctObject = parsedData.filter(obj => obj.id == number)
                console.log(correctObject)
                return correctObject
            } catch (error) {
                console.error('Error:' + error)
            }
        }
        buscaPorId().then(obj => {
            console.log(obj);
            return obj;
        })
    }


    //Devuelve un array con los objetos del archivo
    getAll() {
        async function getEmAll () {
            try {
                const data = await fs.promises.readFile('objetos.txt', 'utf-8')
                const parsedData = JSON.parse(data)
                return parsedData
            } catch (error) {
                console.error('Hubo un error: ' + error)
            }
        }
        getEmAll().then(array => {
            console.log(array);
            return array
        })
        

    }

    //Borra un objeto del archivo según el Id
    deleteById(number) {
        async function borrar () {
            try {
                const data = await fs.promises.readFile('objetos.txt', 'utf-8');
                const parsedData = JSON.parse(data);
                const survivingObjects = parsedData.filter(obj => obj.id !== number)
                await fs.promises.writeFile('objetos.txt', JSON.stringify(survivingObjects))
            } catch (error) {
                console.error('Hubo un error: ' + error)
            }
        }
        borrar()
    }

    
    deleteAll() {
        async function deleteContent() {
            await fs.promises.writeFile('objetos.txt', '', err => console.error(err))
        }
        deleteContent()
    }

}

const prueba = new Contenedor('objetos.txt')

const testObject = {
    title: 'Celular',
    price: 500
}
const testObject2 = {
    title: 'Ipad',
    price: 800
}
const testObject3 = {
    title: 'Laptop',
    price: 700
}

// //PRUEBA save
// prueba.save(testObject)
// prueba.save(testObject2)
// prueba.save(testObject3)


// //PRUEBA getById
// prueba.getById(2)

// //PRUEBA deleteById
// prueba.deleteById(1)

// // PRUEBA getAll
// prueba.getAll()


// // PRUEBA deleteAll()
// prueba.deleteAll()