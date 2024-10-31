const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');

const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const item = document.createElement('li');
    item.textContent = todoInput.value;
    
    todoList.appendChild(item);

    // clear dell'input
    todoInput.value = '';
});