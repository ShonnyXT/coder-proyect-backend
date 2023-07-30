class ProductManager{
    constructor() {
        this.products = []
    }

    addProduct(product) {
        const prod = this.products.find(prod => prod.code === product.code)
        let contador

        if(prod) {
            console.log("Producto con code repetido")
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
            console.log("Not found")
        }
    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this. description = description
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
const producto1 = new Product("Arroz", "Dos hermanos", 300, [], "AA132", 20)
const producto2 = new Product("Fideos", "Marolio", 250, [], "BB132", 20)
const producto3 = new Product("Azucar", "Ledesma", 200, [], "CC132", 20)
const producto4 = new Product("Azucar", "Ledesma", 200, [], "CC132", 20) // test code

// Agregando Productos al carrito
const productManager = new ProductManager()

productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)
productManager.addProduct(producto4)

// Todos los Productos
console.log("")
console.log(">> Listado de Productos <<")
productManager.getProducts()

// Buscar Producto por ID
console.log("")
console.log(">> Productos con ID <<")
productManager.getProductById(3)
productManager.getProductById(4) // test buscardor
