import {calcular, actualizarPantalla, igualOC, teclaOprimida} from './calculadora.js';

const botones = document.querySelectorAll(".btn");
const pantalla = document.getElementById("pantalla");
const historial = document.getElementById("historial");


botones.forEach(boton => {
    boton.addEventListener("click", () => igualOC(boton.value, pantalla, historial));
});

document.addEventListener("keydown", (e) => {
    teclaOprimida(e, pantalla, historial);
});