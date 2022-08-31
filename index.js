
let saludo  = prompt ('BIENVENIDO A TU TARJETA');
let entrada =  prompt("SELECCIONE DE LA OPCION 1 al 4");

while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Extraer dinero");
            console.log ("1-extraer")
            break;
        case "2":
            alert("transferir");
            console.log("tranferir dinero")
            break;
        case "3":
            alert("solicitar prestamo");
            console.log("solicitar prestamo")
            break;
        case "4":
            alert("solicitar adicional");
            console.log("solicitar adicional")
            break;
        default:
            alert("Esta no es una opcion valida");
            console.log ("intenta en otra ocacion")
            break;
    }  
     let salida = prompt ("adios");
      break;
 }
