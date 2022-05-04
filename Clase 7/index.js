// Declaración
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    toString() {
        return `${this.id}. ${this.nombre}, ${this.precio} USD`;
    }
} 

const arrayProductos = [];
arrayProductos.push(new Producto(1, "Paella", 8));
arrayProductos.push(new Producto(2, "Pizza", 8));
arrayProductos.push(new Producto(3, "Sushi salad", 6));
arrayProductos.push(new Producto(4, "Pasta", 6));
arrayProductos.push(new Producto(5, "Sopa", 6));
arrayProductos.push(new Producto(6, "Avocado toast", 4));
arrayProductos.push(new Producto(7, "Ensalada completa", 4));

const mensaje = (listaProductos) => {
    let auxMensaje = [];
    auxMensaje.push("Elija el producto que quiera comprar: ");
    for (let i = 0; i < listaProductos.length; i++){
        auxMensaje.push(listaProductos[i].toString());
    }
    auxMensaje.push("Para finalizar su selección ingrese 0.");
    return auxMensaje.join("\n");
}

let elegirProductos; 
let buscarProducto;
const carrito = [];
let precio = 0;

// Ejecución
elegirProductos = parseInt(prompt(mensaje(arrayProductos)));

while ((elegirProductos > 0) && (elegirProductos <= arrayProductos.length) && (!isNaN(elegirProductos))) {
    buscarProducto = arrayProductos.find((el) => el.id === elegirProductos);
    carrito.push(buscarProducto);
    elegirProductos = parseInt(prompt(mensaje(arrayProductos)));
}

if (carrito.length > 0) {
    carrito.forEach((el) => (precio += el.precio));
    alert(`Usted seleccionó:\n${carrito.join("\n")}\nEl total a abonar es: ${precio} USD`);
} else {
    alert("¡Que pena, no seleccionaste nada!");
}