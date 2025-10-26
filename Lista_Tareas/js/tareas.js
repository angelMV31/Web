const inputTarea = document.querySelector(".homework");
const botonAgregar = document.querySelector(".button");
const lista = document.getElementById("historial");

// 🔹 Cargar tareas guardadas al iniciar
document.addEventListener("DOMContentLoaded", cargarTareas);

function agregarTarea() {
    const texto = inputTarea.value.trim();
    if (texto === "")
        return;

    const item = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const tarea = document.createElement("span");
    tarea.textContent = texto.toUpperCase();

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");

    checkbox.addEventListener("change", () => {
        tarea.style.textDecoration = checkbox.checked ? "line-through" : "none";
        guardarTareas();
    });

    botonEliminar.addEventListener("click", () => {
        item.remove();
        guardarTareas();
    });

    item.appendChild(checkbox);
    item.appendChild(tarea);
    item.appendChild(botonEliminar);
    lista.appendChild(item);

    inputTarea.value = "";

    guardarTareas();
}

function guardarTareas() {
    const tareas = [];
    lista.querySelectorAll("li").forEach(item => {
        const texto = item.querySelector("span").textContent;
        const completada = item.querySelector("input").checked;
        tareas.push({ texto, completada });
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardadas.forEach(t => {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = t.completada;

        const tarea = document.createElement("span");
        tarea.textContent = t.texto;
        tarea.style.textDecoration = t.completada ? "line-through" : "none";

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");

        checkbox.addEventListener("change", () => {
            tarea.style.textDecoration = checkbox.checked ? "line-through" : "none";
            guardarTareas();
        });

        botonEliminar.addEventListener("click", () => {
            item.remove();
            guardarTareas();
        });

        item.appendChild(checkbox);
        item.appendChild(tarea);
        item.appendChild(botonEliminar);
        lista.appendChild(item);
    });
}

botonAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") agregarTarea();
});
