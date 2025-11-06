export function guardarTareas(lista) {
    const tareas = [];
    lista.querySelectorAll("li").forEach(item => {
        const texto = item.querySelector("span").textContent;
        const completada = item.querySelector("input").checked;
        tareas.push({ texto, completada });
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

export function cargarTareas(lista, guardarTareas) {
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
            guardarTareas(lista);
        });

        botonEliminar.addEventListener("click", () => {
            item.remove();
            guardarTareas(lista);
        });

        item.appendChild(checkbox);
        item.appendChild(tarea);
        item.appendChild(botonEliminar);
        lista.appendChild(item);
    });
}