document.addEventListener('DOMContentLoaded', function() {
    initToDoList();
});

function initToDoList() {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Make the list sortable using SortableJS
    new Sortable(taskList, {
        animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
        ghostClass: 'sortable-ghost' // Class name for the drop placeholder
    });

    addButton.addEventListener('click', function() {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            const newTask = document.createElement('li');
            newTask.textContent = taskValue;
            newTask.className = 'task-item'; // Optional: add class for styling
            newTask.addEventListener('click', function() {
                taskList.removeChild(this);
            });
            taskList.appendChild(newTask);
            taskInput.value = '';
        }
    });
}
