const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

export const addItem = (event) => {
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newItem = document.createElement('li');
  newItem.innerText = todoInput.value;
  newItem.classList.add('todo-item');
  todoDiv.append(newItem);
  todoList.append(newItem);

  //  clear todo input value
  todoInput.value = '';
};
