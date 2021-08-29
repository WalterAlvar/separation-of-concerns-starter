export const editItem = (event) => {
  event.preventDefault();
  const todoList = document.getElementById('ul_o');
  let todoListItems = todoList.getElementsByTagName('li');
  for (let i = 0; i < todoListItems.length; i++) {
    // looks for selected item from the list
    if (todoListItems[i].className.includes('linethrough')) {
      // prompts the user for input
      const editedItem = prompt('Edit the item', todoListItems[i].innerText); 
      if (editedItem !== null) {
        // replacing with new text
        todoListItems[i].innerText = editedItem; 
      }
      todoListItems[i].classList.remove("linethrough");
    }
  }
};
