/* ------------------------------------------------------- Declaración */

function pedirUsuario() {
    let usuario = prompt("Escriba su nombre de usuario");

    while (usuario.length < 6) {
        alert("Por favor ingrese un usuario válido. Recuerde que debe tener 6 caracteres o más.");
        usuario = prompt("Escriba su nombre de usuario");
    }
    
    return usuario;
}

function pedirClave() {
    let clave = prompt("Escriba su contraseña");

    while (clave.length < 8) {
        alert("Por favor ingrese una contraseña válida. Recuerde que debe tener 8 caracteres o más.");
        clave = prompt("Escriba su contraseña");
    }

    return clave;
}

let salidaUsuario;
let salidaClave;

class Registro {
    constructor(usuario, clave) {
        this.usuario = usuario;
        this.clave = clave;
    }
}

const arrayRegistro = [];

/* ------------------------------------------------------- Ejecución */

let cantidadRegistros = parseInt(prompt("Elija la cantidad de registros a crear."));

for (let i = 0; i < cantidadRegistros; i++) {
    salidaUsuario = pedirUsuario();
    salidaClave = pedirClave();
    arrayRegistro.push(new Registro(salidaUsuario, salidaClave));
} 

console.log(arrayRegistro);