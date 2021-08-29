const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

export const addItem = (event) => {
  event.preventDefault();
  const newToDoName = todoInput.value;
  if (newToDoName !== '') {
    if (newToDoName.length > 80) {
      alert('Length should be less than 80 characters');
    } else {
      const todoDiv = document.createElement('div');
      const newToDoItem = document.createElement('li');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.onclick = 'done-item()';
      checkBox.id = `chk-${newToDoName}`;
      checkBox.checked = false;
      checkBox.classList = 'uncompleted'; // Start with a 'uncompleted' task for css handling
      newToDoItem.appendChild(checkBox); // Append the checkbox to the <li>
      const newItemText = document.createTextNode(newToDoName); // Create the text node after the checkbox
      newToDoItem.appendChild(newItemText); // Append the text node to the <li>
      newToDoItem.classList.add('todo-item'); // Add a class to each new 'Li' for css styles
      todoDiv.append(newToDoItem);
      todoList.append(newToDoItem);

      // clear todo input value
      todoInput.value = '';
    }
  } else {
    alert('Item can not be empty');
  }
};
