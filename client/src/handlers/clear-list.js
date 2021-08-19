const todoList = document.querySelector('.todo-list');

export const clearList = (event) => {
    event.preventDefault();
    confirm('Are you sure you want to clear the entire list?');
    while (todoList.lastChild) {
        todoList.removeChild(todoList.lastChild);
    }
}