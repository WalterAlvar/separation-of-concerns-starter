export const editItem = (event) => {
  event.preventDefault();
  const todoList = document.getElementById('ul_o');
  let todoListItems = todoList.getElementsByTagName('li');
  for (let i = 0; i < todoListItems.length; i++) {
    if (todoListItems[i].className.includes('linethrough')) {
      const editedItem = prompt('Edit the item', todoListItems[i].innerText); // prompts the user for input
      if (editedItem !== null) {
        todoListItems[i].innerText = editedItem; // replacing with new text
      }
      todoListItems[i].classList.remove("linethrough");
    }
  }
};
