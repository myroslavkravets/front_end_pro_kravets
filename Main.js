document.addEventListener("DOMContentLoaded", loadTodos);

const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

addTodoButton.addEventListener("click", addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    const todo = {
        id: Date.now(),
        text: todoText,
        completed: false
    };

    const todos = getTodos();
    todos.push(todo);
    saveTodos(todos);
    renderTodoItem(todo);

    todoInput.value = "";
}

function renderTodoItem(todo) {
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleComplete(todo.id));

    const text = document.createElement("span");
    text.classList.add("todo-text");
    if (todo.completed) text.classList.add("completed");
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => deleteTodoItem(todo.id));

    listItem.append(checkbox, text, deleteButton);
    todoList.appendChild(listItem);
}

function deleteTodoItem(id) {
    let todos = getTodos();
    todos = todos.filter(todo => todo.id !== id);
    saveTodos(todos);
    renderTodos();
}

function toggleComplete(id) {
    const todos = getTodos();
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    saveTodos(todos);
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = "";
    const todos = getTodos();
    todos.forEach(renderTodoItem);
}

function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    renderTodos();
}
