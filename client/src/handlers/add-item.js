const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.user-list');

export const addItem = (event) => {
  event.preventDefault();
  const newItem = document.createElement('li');
  newItem.innerText = todoInput.value;
  todoList.append(newItem);
};
