const todoList = document.querySelector('.todo-list');

export const clearList = (event) => {
    event.preventDefault();
    const userConfirm = confirm('Are you sure you want to clear the entire list?');
    if(userConfirm){
        while (todoList.lastChild) {
            todoList.removeChild(todoList.lastChild);
        }
    }
}