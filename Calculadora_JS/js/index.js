function calcular(num1, num2, operacion) {
    let resultado;

    if (operacion === "+") {
        resultado = num1 + num2;
    } else if (operacion === "-") {
        resultado = num1 - num2;
    } else if (operacion === "*") {
        resultado = num1 * num2;
    } else if (operacion === "/") {
        if (num2 === 0) {
            return "No se puede dividir entre cero.";
        }
        resultado = num1 / num2;
    } else {
        return "Operación no válida. Usa (+,-,*,/).";
    }

    return `El resultado de la ${operacion} es: ${resultado}`;
}

let continuar = "si";

do{
    let num1 = Number.parseInt(prompt("Ingresa el primer número:"));
    console.log(`Número 2:"${num1}`);
    let num2 = Number.parseInt(prompt("Ingresa el segundo número:"));
    console.log(`Número 2:"${num2}`);
    let operacion = prompt("Ingresa la operación (+,-,*,/):");
    console.log(`Operación:" ${operacion}`);

    let resultadoFinal = calcular(num1, num2, operacion);

    alert(resultadoFinal);

    console.log("Número 1:", num1);
    console.log("Número 2:", num2);
    console.log("Operación:", operacion);
    console.log(resultadoFinal);

    continuar = prompt("¿Deseas realizar otra operación? (si/no)").toLowerCase();
}while(continuar == "si");

console.log("Salió de la calculadora.");