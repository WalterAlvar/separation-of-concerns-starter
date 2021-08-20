const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

export const addItem = (event) => {
  // event.preventDefault();
  // const todoDiv = document.createElement('div');
  // todoDiv.classList.add('todo');
  // const newItem = document.createElement('li');
  // newItem.innerText = todoInput.value;
  // newItem.classList.add('todo-item');
  // todoDiv.append(newItem);
  // todoList.append(newItem);

  // //  clear todo input value
  // todoInput.value = '';

  event.preventDefault();
  const itemName = todoInput.value;
  const newLi = document.createElement('li');
  const cb = document.createElement( "input" );
  cb.type = "checkbox";
  cb.id = 'chk-' + itemName;
  cb.checked = false;
  newLi.appendChild(cb);   // Append the checkbox to the <li>
  const newItem = document.createTextNode(itemName);  // Create the text node after the the checkbox
  newLi.appendChild(newItem);  // Append the text node to the <li>
  todoList.appendChild(newLi);   // Append the <li> to the <ul>

  // clear todo input value
  todoInput.value = '';
};
