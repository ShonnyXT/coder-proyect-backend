class ProductManager{
    constructor() {
        this.products = []
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
    }
}

const producto1 = new Product("Arroz", "Dos hermanos", 300, "AA132AA", 20, [])
const producto2 = new Product("Arroz", "Marolio", 300, "AA132AA", 20, [])
const producto3 = new Product("Arroz", "Best", 300, "AA132AA", 20, [])