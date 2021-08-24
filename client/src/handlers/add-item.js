const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

export const addItem = (event) => {
  event.preventDefault();
  const newToDoName = todoInput.value;
  if (newToDoName != '') {
    if (newToDoName.length > 80) {
      alert('Length should be less than 80 characters');
    } else {
      const todoDiv = document.createElement('div');
      const newToDoItem = document.createElement('li');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.id = 'chk-' + newToDoName;
      checkBox.checked = false;
      newToDoItem.appendChild(checkBox); // Append the checkbox to the <li>
      const newItem = document.createTextNode(newToDoName); // Create the text node after the the checkbox
      newToDoItem.appendChild(newItem); // Append the text node to the <li>
      todoDiv.append(newToDoItem);
      todoList.append(newToDoItem);

      // clear todo input value
      todoInput.value = '';
    }
  } else {
    alert('Item can not be empty');
  }
};
