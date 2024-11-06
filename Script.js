document.addEventListener("DOMContentLoaded", function () {
    const agregarBtn = document.getElementById("agregarBtn");
    const terminarBtn = document.querySelector(".button.is-info"); // Botón de "Terminar"
    const eliminarBtn = document.querySelector(".button.is-danger"); // Botón de "Eliminar"
    const tareaInput = document.getElementById("tareaInput");
    const tareasDiv = document.getElementById("tareas");

    let tareaSeleccionada = null;

    // Función para agregar una nueva tarea
    agregarBtn.addEventListener("click", function () {
        const tareaTexto = tareaInput.value.trim();

        if (tareaTexto !== "") {
            // Crear un nuevo elemento de tarea
            const tareaItem = document.createElement("div");
            tareaItem.className = "box has-background-grey-lighter has-text-black mb-2";
            tareaItem.textContent = tareaTexto;

            // Agregar evento de clic para seleccionar la tarea
            tareaItem.addEventListener("click", function () {
                if (tareaSeleccionada) {
                    tareaSeleccionada.classList.remove("is-selected");
                }
                tareaItem.classList.add("is-selected");
                tareaSeleccionada = tareaItem;
            });

            // Añadir la tarea al contenedor de tareas
            tareasDiv.appendChild(tareaItem);

            // Limpiar el campo de entrada
            tareaInput.value = "";
        }
    });

    // Función para terminar la tarea seleccionada
    terminarBtn.addEventListener("click", function () {
        if (tareaSeleccionada) {
            tareaSeleccionada.classList.add("has-text-grey-light", "has-background-grey-dark");
            tareaSeleccionada.classList.remove("is-selected");
            tareaSeleccionada = null;
        }
    });

    // Función para eliminar la tarea seleccionada
    eliminarBtn.addEventListener("click", function () {
        if (tareaSeleccionada) {
            tareasDiv.removeChild(tareaSeleccionada);
            tareaSeleccionada = null;
        }
    });
});
