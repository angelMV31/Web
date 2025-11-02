let operacion = "";

export function actualizarPantalla(pantalla) {
    pantalla.value = operacion;
}

export function calcular(pantalla, historial) {
    
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

export function igualOC(valor, pantalla, historial) {
    if (valor === "C") {
        operacion = "";
        pantalla.value = "";
        return;
    }

    if (valor === "=") {
        calcular(pantalla, historial);
        return;
    }

    operacion += valor;
    actualizarPantalla(pantalla);
}

export function teclaOprimida(e, pantalla, historial){

    const tecla = e.key;

    if (!isNaN(tecla) || tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/") {
        operacion += tecla;
        actualizarPantalla(pantalla);
        return;
    }

    if (tecla === "Enter" || tecla === "=") {
        e.preventDefault();
        calcular(pantalla, historial);
        return;
    }

    if (tecla === "Backspace") {
        operacion = operacion.slice(0, -1);
        actualizarPantalla(pantalla);
        return;
    }

    if (tecla.toLowerCase() === "c") {
        operacion = "";
        actualizarPantalla(pantalla);
    }
};
