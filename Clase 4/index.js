const TOTAL = (precio, cantidad) => precio * cantidad;

let precioCajaBasica = 5;

let precioCajaPremium = 7;

let caja = parseFloat(prompt(`Elija la caja que quiere comprar:
1. Caja básica = ${precioCajaBasica} USD
2. Caja premium = ${precioCajaPremium} USD`));

while (caja !== 1 && caja !== 2) {
    alert("Por favor elija una opción válida. Para caja básica ingrese '1' y para caja premium ingrese '2'");
    caja = parseFloat(prompt(`Elija la caja que quiere comprar:
1. Caja básica = ${precioCajaBasica} USD
2. Caja premium = ${precioCajaPremium} USD`));
}  

let cantidad = parseFloat(prompt("Ingrese la cantidad de cajas que desea comprar"));

while ((isNaN(cantidad)) || (cantidad % 1 !== 0)) {
    alert("Por favor ingrese una cantidad válida");
    cantidad = parseFloat(prompt("Ingrese la cantidad de cajas que desea comprar"));
}

if (caja === 1) {
    let total = TOTAL(precioCajaBasica, cantidad);
    alert(`El total a pagar es de ${total} USD`);
} else if (caja === 2) {
    let total = TOTAL(precioCajaPremium, cantidad);
    alert(`El total a pagar es de ${total} USD`);
}