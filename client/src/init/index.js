import '../handlers/add-item.js';
import '../listeners/add-button-listener.js';
import '../handlers/clear-list.js';
import '../listeners/clear-button-listener.js';

import '../handlers/remove-item.js';
import '../listeners/remove-button-listener.js';
import '../listeners/nightmode-listener.js';

//sort list


const sortBtn = document.querySelector('.sorting-todo');
sortBtn.addEventListener('click', sortList);

const todoList = document.querySelector('.todo-list');
const param = document.querySelectorAll('.liToSort');

const sortList = (event) => {
    event.preventDefault();
    const sortedList = todoList
  };  


/*
  const sortWords = (event) => {
    const howToSort = event.target.value;//gather user input from DOM
    const sorted = sortStrings(data.words, howToSort);
    //Render new list
    const newList = renderList(sorted);
    const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';
  listContainer.appendChild(newList);
};
*/