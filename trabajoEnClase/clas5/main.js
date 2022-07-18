// /* 
// A) Crear un proyecto en node.js que genere 10000 numeros aleatorios en el rango de 1 a 20.
// B) Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió
// dicho número. Representar por consola los resultados
// */

// function getRandomInt(max) {
//     return Math.ceil(Math.random() * max);
// }

// let count1 = 0
// let count2 = 0
// let count3 = 0
// let count4 = 0
// let count5 = 0
// let count6 = 0
// let count7 = 0
// let count8 = 0
// let count9 = 0
// let count10 = 0


// for (let i = 0; i < 5000; i++) {
//     let currentValue = getRandomInt(10)

//     switch (currentValue) {
//         case 1:

//             count1++
//             break;
//         case 2:

//             count2++
//             break;
//         case 3:

//             count3++
//             break;
//         case 4:

//             count4++
//             break;
//         case 5:

//             count5++
//             break;
//         case 6:

//             count6++
//             break;
//         case 7:

//             count7++
//             break;
//         case 8:

//             count8++
//             break;
//         case 9:

//             count9++
//             break;
//         case 10:

//             count10++
//             break;

//         default:
//             break;
//     }

// }

// let totalCount = {
//     numberOne: `It was rolled ${count1} times`,
//     numberTwo: `It was rolled ${count2} times`,
//     numberThree: `It was rolled ${count3} times`,
//     numberFour: `It was rolled ${count4} times`,
//     numberFive: `It was rolled ${count5} times`,
//     numberSix: `It was rolled ${count6} times`,
//     numberSeven: `It was rolled ${count7} times`,
//     numberEight: `It was rolled ${count8} times`,
//     numberNine: `It was rolled ${count9} times`,
//     numberTen: `It was rolled ${count10} times`
// }
// console.log(totalCount)

const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]



let objFunction = () => {
    let arrayNombres = []
    productos.forEach((obj) => arrayNombres.push(obj.nombre))
    let stringProductos = arrayNombres.join(', ')

    let arrayPrecios = []
    productos.forEach((obj) => arrayPrecios.push(obj.precio))

    let precioTotal = arrayPrecios.reduce((prev, curr) => prev + curr)

    let minToMax = productos.sort((a, b) => a.precio - b.precio)

    let minPrice = minToMax[0]
    let maxPrice = minToMax[minToMax.length - 1].nombre


    let obj = {
        nombres: stringProductos,
        pTotal: precioTotal,
        precioPromedio: precioTotal / arrayPrecios.length,
        precioMinimo: minPrice.nombre,
        precioMaximo: maxPrice

    }
    console.log(obj)
}
objFunction()
