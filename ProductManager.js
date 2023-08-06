import {promises as fs} from 'fs'

class ProductManager{

    constructor() {
        this.path = './productos.json'
    }
    
    async addProduct(product) {
        // Comprobacion de adicion al carro
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const code = prods.find(prod => prod.code === product.code)

        if (!product.id || code) {
            console.log("")
            console.log("> Campo requerido o Code Repetido <")
        } else {
            prods.push(product)
            await fs.writeFile(this.path, JSON.stringify(prods))
            console.log("")
            console.log("> Producto añadido con Éxito <")
        }
    }
    
    async getProducts() {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        
        console.log("")
        console.log(">> Listado de Productos <<")
        console.log(prods)
    }
    
    async getProductById(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const prod = prods.find(prod => prod.id === id)

        if(prod) {
            console.log("")
            console.log(">> Productos con ID encontrado: <<")
            console.log(prod)
        } else {
            console.log("")
            console.log("> Not found <")
        }
    }
    
    async updateProduct(id, product) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const index = prods.findIndex(prod => prod.id === id)
        
        if (index != -1) {
            prods[index].title = product.title
            prods[index].description = product.description
            prods[index].price = product.price
            prods[index].thumbnail = product.thumbnail
            prods[index].code = product.code
            prods[index].stock = product.stock
            await fs.writeFile(this.path, JSON.stringify(prods))
            
            console.log("")
            console.log(">> Se cambio el Producto con id: " + id + " <<")
        }  else {
            console.log("")
            console.log("> Producto no encontrado <")
        }
    }
    
    async deleteProduct(id) {
        const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        const prod = prods.find(prod => prod.id === id)
        
        if (prod) {
            await fs.writeFile(this.path, JSON.stringify(prods.filter(prod => prod.id != id)))
            console.log("")
            console.log(">> Se elimino el Producto con id: " + id + " <<")
        } else {
            console.log("")
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
/* productManager.addProduct(producto5) */  // peligro de romper

// Todos los Productos
productManager.getProducts()

// Buscar Producto por ID
productManager.getProductById(2)
productManager.getProductById(4) // test buscardor

// Cambiando Producto       (id, cuerpo)
productManager.updateProduct(1, {title: "prueba", description: "comprobada", price: 99, thumbnail: [], code: "ZZ999", stock: 99})

// Borrar un Producto
/* productManager.deleteProduct(3) */ // peligro de romper

