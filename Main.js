const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTaskInput');

// Додавання нового завдання
addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        const newTask = document.createElement('li');
        newTask.className = 'task-item';
        newTask.innerHTML = `${taskText} <button class="delete-btn">Видалити</button>`;
        taskList.appendChild(newTask);
        newTaskInput.value = "";
    }
});

// Делегування подій для видалення завдань
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});