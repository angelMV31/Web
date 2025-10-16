console.log("Hola mundo desde node");
//alert("Hola mundo");
/*
* Comentario de bloque
*/

let nombre = "Angel";
const apellidos = 'Mendoza';
//apellidos = "González"; No se permite

let saludo = `Hola ${nombre} ${apellidos}`;
let saludo2 = "Hola " + nombre + " " + apellidos;
console.log(saludo);
console.log(saludo2);

let edad = 30;
let esEstudiante = true;

let numero = 5; //Number
let numeroLetra = "5"; //String

if (numero === numeroLetra) {
    console.log("Son iguales");
}else {
    console.log("No son iguales");
}

let frutas = ["banana", "manzana", "pera", 5];
//frutas[3] = "Kiwi";
/*for(i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}*/
console.log(frutas);

let persona = {
    nombre: "Juanito",
    apellido: "Lopez",
    edad: null,
    esEstudiante: false
};

console.log(persona);
console.log("Nombre: " + persona.nombre);
console.log(persona.edad)

let x;
console.log(x); //undefined
console.log(persona.direccion); //undefined
console.log(frutas[10]); //undefined

console.log(5 - "3fhfghs");

function sumar(a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

const multiplicar = function(a, b = 2) {
    return a * b;
}

console.log(sumar(2, 6));
let resultado = multiplicar; //Se pasa la función
console.log(resultado);