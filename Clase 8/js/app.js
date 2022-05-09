//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
const welcomeMsg = document.querySelector(".banner-title");

//cart
let cart = [];

//create products
class Products {
    constructor(id, title, price, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }

    toString() {
        return `${this.id}. ${this.title}, ${this.price} USD`;
    }
}

const productsData = [];
productsData.push(new Products(1, "Sushi salad", 8, "images/product-1.jpg"));
productsData.push(new Products(2, "Pasta", 4, "images/product-2.jpg"));
productsData.push(new Products(3, "Sopa", 4, "images/product-3.jpg"));
productsData.push(new Products(4, "Avocado toast", 6, "images/product-4.jpg"));
productsData.push(new Products(5, "Paella", 8, "images/product-5.jpg"));
productsData.push(new Products(6, "Salmón rosado", 8, "images/product-6.jpg"));
productsData.push(new Products(7, "Ensalada", 6, "images/product-7.jpg"));
productsData.push(new Products(8, "Pizza", 6, "images/product-8.jpg"));

//display products
for (const product of productsData) {
    let displayProducts = document.createElement("article");
    displayProducts.className = "product";
    displayProducts.innerHTML = `
    <div class="img-container">
        <img src=${product.image} alt="Producto" class="product-img">
        <button class="bag-btn" data-id=${product.id}>
            <i class="fas fa-shopping-cart"></i>
            Agregar al carrito
        </button>
    </div>
    <h3>${product.title}</h3>
    <h4>${product.price} USD</h4>
    `
    productsDOM.appendChild(displayProducts);
}

//welcome msg
let userName = prompt("¡Hola! ¿Cómo te llamás?");

if (userName != "" && isNaN(userName)) {
    welcomeMsg.innerText = "Bienvenido/a a iCook, " + userName; 
}