const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

export const addItem = (event) => {
  event.preventDefault();
  const newToDoName = todoInput.value;
  if (newToDoName !== '') {
    // validates user input if there is an empty entry
    if (newToDoName.length > 80) {
      // validates length of input
      alert('Length should be less than 80 characters');
    } else {
      const todoDiv = document.createElement('div');
      const newToDoItem = document.createElement('li');
      // Create the text node
      const newItemText = document.createTextNode(newToDoName);
      // Append the text node to the <li>
      newToDoItem.appendChild(newItemText); 
      // Add a class to each new 'Li' for css styles
      newToDoItem.classList.add('todo-item'); 
      todoDiv.append(newToDoItem);
      todoList.append(newToDoItem);
      // Clear todo input value
      todoInput.value = '';
    }
  } else {
    alert('Item can not be empty');
  }
};
