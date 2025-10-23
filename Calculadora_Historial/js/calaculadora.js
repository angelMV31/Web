const botones = document.querySelectorAll(".btn");
const pantalla = document.getElementById("pantalla");
const historial = document.getElementById("historial");

let operacion = "";

function actualizarPantalla() {
    pantalla.value = operacion;
}

function calcular() {
    
    if(operacion!="") {

        if(!Number.isInteger(Number.parseInt(operacion.slice(-1)))) {
            pantalla.value = "Error";
            operacion = "";
            return;
        }

        if(operacion.includes("+*") || 
            operacion.includes("+-") ||
            operacion.includes("+/") ||

            operacion.includes("-*") ||
            operacion.includes("-+") ||
            operacion.includes("-/") ||

            operacion.includes("*+") ||
            operacion.includes("*-") ||
            operacion.includes("*/") ||

            operacion.includes("/+") ||
            operacion.includes("/-") ||
            operacion.includes("/*") ){

            pantalla.value = "Error";
            operacion = "";

        }
        else{

            let resultado = eval(operacion);
            
            pantalla.value = resultado;
            
            const item = document.createElement("li");
            item.textContent = `${operacion} = ${resultado}`;
            historial.appendChild(item);
            
            console.log(operacion);
            operacion = resultado.toString();
            console.log(operacion);

        }
    }

}

function igualOC(valor) {
    if (valor === "C") {
        operacion = "";
        pantalla.value = "";
        return;
    }

    if (valor === "=") {
        calcular();
        return;
    }

    operacion += valor;
    actualizarPantalla();
}

botones.forEach(boton => {
    boton.addEventListener("click", () => igualOC(boton.value));
});

document.addEventListener("keydown", (event) => {
    const tecla = event.key;

    if (!isNaN(tecla) || tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/") {
        operacion += tecla;
        actualizarPantalla();
        return;
    }

    if (tecla === "Enter" || tecla === "=") {
        event.preventDefault();
        calcular();
        return;
    }

    if (tecla === "Backspace") {
        operacion = operacion.slice(0, -1);
        actualizarPantalla();
        return;
    }

    if (tecla.toLowerCase() === "c") {
        operacion = "";
        actualizarPantalla();
    }
});
