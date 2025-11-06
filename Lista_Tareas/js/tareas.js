export function agregarTarea(inputTarea, lista, guardarTareas) {
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

    inputTarea.value = "";

    guardarTareas(lista);
}
