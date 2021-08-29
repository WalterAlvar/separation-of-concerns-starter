const todoList = document.querySelector('.todo-list');

export const removeItem = (event) => {
  event.preventDefault();
  const todoLists = document.getElementById('ul_o');
  const todoListItems = todoLists.getElementsByTagName('li');
  const deletedList = [];
  for (let i = 0; i < todoListItems.length; i++) {
    if (todoListItems[i].className.includes('linethrough')) {
      deletedList.push(todoListItems[i]);
    }
  }
  // removing selected items from the list
  deletedList.forEach((element) => {
    todoList.removeChild(element); 
  });
};
