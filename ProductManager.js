class ProductManager{
    constructor() {
        this.products = []
    }

    addProduct(product) {
        // Comprobacion de adicion al carro
        const prod = this.products.find(prod => prod.code === product.code)
        if (!product.id || prod) {
            console.log("")
            console.log("> Campo requerido o Code Repetido<")
        } else {
            this.products.push(product)
        }
    }

    getProducts() {
        console.log(this.products)
    }

    getProductById(id) {
        const prod = this.products.find(prod => prod.id === id)
        if(prod) {
            console.log(prod)
        } else {
            console.log("> Not found <")
        }
    }

    updateProduct(id, title, description, price, thumbnail, code, stock) {
        const prod = this.products.find(prod => prod.id === id)
        const index = this.products.findIndex(prod => prod.id === id)

        if (prod) {
            this.products[index].title = title
            this.products[index].description = description
            this.products[index].price = price
            this.products[index].thumbnail = thumbnail
            this.products[index].code = code
            this.products[index].stock = stock
            console.log("Se cambio el Producto con id: " + id)
        }  else {
            console.log("> Producto no encontrado <")
        }
    } 

    deleteProduct(id) {
        const prod = this.products.find(prod => prod.id === id)
        const index = this.products.findIndex(prod => prod.id === id)
        if (prod) {
            this.products.splice(index,1)
            console.log("Se elimino el Producto con id: " + id)
        } else {
            console.log("> Producto no encontrado <")
        }
    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        // Comprobacion de campos
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return
        }

        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementarId()
    }

    // Incrementador para el ID
    static incrementarId() {
        if(this.idIncrementador) {
            this.idIncrementador++
        } else {
            this.idIncrementador = 1
        }
        return this.idIncrementador
    }
}

// Productos
const producto1 = new Product("Fiambres", "Dos hermanos", 300, [], "AA123", 20)
const producto2 = new Product("Fideos", "Marolio", 250, [], "BB123", 20)
const producto3 = new Product("Prueba", "Prueba", 999, [], "ZZ999")  // test campo faltante
const producto4 = new Product("Azucar", "Ledesma", 250, [], "DD123", 20)
const producto5 = new Product("Prueba", "Prueba", 999, [], "DD123", 20) // test code

// Agregando Productos al carrito
const productManager = new ProductManager()
productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)
productManager.addProduct(producto4)
productManager.addProduct(producto5)

// Todos los Productos
console.log("")
console.log(">> Listado de Productos <<")
productManager.getProducts()

// Buscar Producto por ID
console.log("")
console.log(">> Productos con ID <<")
productManager.getProductById(2)
productManager.getProductById(4) // test buscardor

// Cambiando Producto       (id, title, description, price, thumbnail, code, stock)
console.log("")
console.log(">> Productos Cambiados <<")
productManager.updateProduct(1, "Producto", "Cambiado", 99, [], "ZZ99", 99)

// Borrar un Producto
console.log("")
console.log(">> Productos Eliminados <<")
productManager.deleteProduct(3)

console.log("")
console.log("")
console.log(">>> Resultado Final <<<")
productManager.getProducts()
