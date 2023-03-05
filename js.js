//Ejercicio 1 Clase 10
const nombreeeeee = "Nombre";
const surname = "Apellido";
console.log(nombreeeeee + " " + surname);

//Ejercicio 2 Clase 10
let n1 = 43;
let n2 = 12;
let n3 = (n1 + n2);
console.log(n3);
let n4 = (n3 + 25);
console.log(n4);

//Ejercicio 1 Clase 11
let topping = prompt("Seleccione su topping:")
let precioFinal;
let helado = 5;
let precio;

if(topping =="oreo"){
    precio = 5;
}else if (topping =="kitkat"){
    precio = 10
}else if (topping =="kinder"){
    precio = 20
}else{console.log("No tenemos ese topping")}
precioFinal = precio + helado;
console.log("El precio del helado es de $", precioFinal)

//Ejercicio 2 Clase 11
let menu = prompt("Elija un menu: ");
switch (menu) {
case "carne":
console.log("Su bebida será vino tinto. 🍷");
break;
case "pescado":
console.log("Su bebida será vino blanco. 🍾");
break;
case "verdura":
console.log("Su bebida será agua. 🚰");
break;
default:
console.log("Opción incorrecta, por favor elija entre carne, pescado o verdura. Escribir opción en minúsculas.");
}

//Ejercicio 3 Clase 11
let n = 0;
while (n < 11) {
    console.log("El numero es más chico que 11");
    n++;
}

//Ejercicio 1 Clase 12
var ingresar = prompt("Ingresá tu nombre",);
if (ingresar){
    alert("Hola " + ingresar + "!");
} else if (ingresar===""){
    alert("No ingresaste tu nombre");
} else {
    alert("No ingresaste tu nombre");
}
