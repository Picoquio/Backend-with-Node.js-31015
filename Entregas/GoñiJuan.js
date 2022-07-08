class User {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.books = [];
        this.pets = [];
    }

    getFullName() {
        return `${this.name} ${this.lastname}`
    }

    addPet(string) {
        this.pets.push(string)
    }

    countPets() {
        return this.pets.length;
    }

    addBook(nameOfBook, author) {
        
        let bookToPush = {
            nombre: nameOfBook,
            autor: author
        }

        this.books.push(bookToPush)
    }

    getBookNames() {
        return this.books.map((object) => {
            return object.nombre
        })
    }
}

// Creando instanciacion
let juan = new User('Juan', 'Goñi')

// Agregando mascotas
juan.addPet('Whisky')
juan.addPet('Leonor')

//Agregando libros
juan.addBook('Rayuela', 'Cortazar')
juan.addBook('Republica', 'Platon')

//Testeando objeto entero
console.log(juan)

//Testeando el método getFullName
console.log(juan.getFullName())

//Testeando el método countPets
console.log(juan.countPets())

//Testeando el método getBookNames
console.log(juan.getBookNames())
