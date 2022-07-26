let arrayProductos = [];
let id = 0;

class CLassAPI {

    static getAll() {
        if (arrayProductos.length <= 0) {
            return { error: 'producto no encontrado' }
        }
        else {
            return arrayProductos;
        }
    }

    static filterId(num) {
        if (arrayProductos.length <= 0) {
            return { error: 'producto no encontrado' }
        }
        else {
            const found = arrayProductos.find(obj => obj.id == num)
            return found;
        }
    }

    static addProduct(title, price, url) {
        const product = { id: ++id, title, price, url };
        arrayProductos.push(product);
        return product;
    }

    static update(num, title, price, url) {
        const newObject = {
            id: num,
            title: title,
            price: price,
            url: url
        }
        arrayProductos[num - 1] = newObject
        return arrayProductos
    }

    static delete(num) {
        arrayProductos.forEach((obj, i) => {
            if (obj.id == num) {
                arrayProductos.splice(i, 1)
            }
        })
        return arrayProductos
    }








}

module.exports = CLassAPI