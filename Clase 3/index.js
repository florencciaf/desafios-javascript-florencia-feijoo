let user = prompt("Escriba su nombre de usuario");

while (user != "coderhouse") {
    switch (user) {
        case "":
            alert("Por favor ingrese un usuario válido");
            break;
        case "Coderhouse":
            alert("Preste atención a las mayúsculas y minúsculas");
            break;
        case "CoderHouse":
            alert("Preste atención a las mayúsculas y minúsculas");
            break;
        default:
            alert(`El usuario "${user}" no existe`);
            break;
    }
    user = prompt("Escriba su nombre de usuario");
}

let password = prompt("Escriba su contraseña");

while (password != "1234") {
    switch (password) {
        case "":
            alert("Por favor ingrese una contraseña válida");
            break;
        default:
            alert("Contraseña incorrecta");
            break;
    }
    password = prompt("Escriba su contraseña");
}

