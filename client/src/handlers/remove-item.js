const todoList = document.querySelector('.todo-list');

export const removeItem = (event) => {
  event.preventDefault();
  const todoList = document.getElementById('ul_o');
  const todoListItems = todoList.getElementsByTagName('li');
  const deletedList = [];
  for (let i = 0; i < todoListItems.length; i++) {
    if (todoListItems[i].className === 'linethrough') {
      deletedList.push(todoListItems[i]);
    }
  }
  deletedList.forEach((element) => {
    todoList.removeChild(element); // removing selected items from the list
  });
};
