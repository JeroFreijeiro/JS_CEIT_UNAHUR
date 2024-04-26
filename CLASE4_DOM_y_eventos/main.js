// A) Deshabilitar y habilitar el botón de agregar
function toggleAddButton() {
    const input = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    addButton.disabled = !input.value.trim(); // Deshabilita si el input está vacío
}

// B) Agregar tareas a la lista
function addTask() {
    const input = document.getElementById('taskInput');
    const list = document.getElementById('taskList');
    const taskText = input.value.trim();

    if (!taskText) {
        return; // Si no hay texto, no hacer nada
    }

    // C) Evitar duplicados
    if (Array.from(list.children).some(li => li.textContent.replace("Borrar", "").trim() === taskText)) {
        alert("Esta tarea ya fue agregada.");
        return;
    }

    // Crear nuevo elemento li con botón de borrar
    const li = document.createElement('li');
    li.textContent = taskText + " ";
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.onclick = function() { removeTask(li); }; // D) Añadir funcionalidad de borrar
    li.appendChild(deleteButton);
    list.appendChild(li);

    // Limpiar input y mantener el foco
    input.value = "";
    input.focus();
    toggleAddButton(); // Actualizar estado del botón
}

// D) Borrar tareas de la lista
function removeTask(item) {
    if (confirm("¿Estás seguro de que quieres borrar esta tarea?")) {
        item.remove(); // Eliminar el item si se confirma
    }
}