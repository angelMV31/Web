import {cargarTareas, guardarTareas} from './localStorage.js';
import {agregarTarea} from './tareas.js';

const inputTarea = document.querySelector(".homework");
const botonAgregar = document.querySelector(".button");
const lista = document.getElementById("historial");

document.addEventListener("DOMContentLoaded", () => {
    cargarTareas(lista, guardarTareas);
});

botonAgregar.addEventListener("click", () => {
    agregarTarea(inputTarea, lista, guardarTareas);
});

inputTarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        agregarTarea(inputTarea, lista, guardarTareas);
    }
});