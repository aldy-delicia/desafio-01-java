
let espacio = " ";
let nombre = prompt( "ingrese su nombre");
let saludo ='hola'+ espacio + nombre + ',bienvenido a tu tarjeta';
console.log(saludo);
alert (saludo);

let entrada =  prompt('SELECCIONE una opcion'+espacio+ "1-extraer dinero"+ "2-transferir"+"3-solicitar prestamo"+"4-solicitar adicional");


while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Extraer dinero");
            console.log ("1-extraer");
            let valor = prompt ( "ingrese el monto");
            alert("procesando, muchas gracias");
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
    entrada =  prompt('SELECCIONE una opcion'+espacio+ "1-extraer dinero"+ "2-transferir"+"3-solicitar prestamo"+"4-solicitar adicional");

 }
 
