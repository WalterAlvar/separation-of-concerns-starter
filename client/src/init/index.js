import '../handlers/add-item.js';
import '../listeners/add-button-listener.js';
import '../handlers/clear-list.js';
import '../listeners/clear-button-listener.js';

import '../handlers/remove-item.js';
import '../listeners/remove-button-listener.js';
//import '../listeners/nightmode-listener.js';




//sort list

const todoList = document.querySelector('.todo-list');

const filterOption = document.querySelector('.sorting-todo');

// Event listener

filterOption.addEventListener('click', filterToDo);


function filterToDo(e) {
  const toDos = todoList.childNodes;
  toDos.forEach(function(toDos){
    switch(e.target.value){
      case "all":
        todo.style.display = 'flex';
        break;
      case "completed":
        if (todo.classList.contains('completed')){
          todo.style.display = 'flex';
        }else{
          todo.style.display = 'none';
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains('completed')){
          todo.style.display = 'flex';
        }else{
          todo.style.display = 'none';
        }
        break;    
    }
  });
}

// mark completed


const doneItem = (event) => {
  
  const currentItem = event.target;
  currentItem.classList.toggle("completed");
};

const doneLi = document.querySelector('.todo-list');
doneLi.addEventListener('click', doneItem);

/*
const markCompleted = (event) => {
  event.preventDefault();
  const checked = document.getElementById('chk-');
  const todoListItems = checked.getElementsByTagName("li");
    if (todoListItems.checked){
      todoListItems.classList.toggle('completed');
    }

}

const completedItem() {
    let checkedItem = document.getElementById('chk-');
    if (checkedItem.classList.contains("uncompleted")) {
        checkedItem.classList.replace("uncompleted", "completed");
    } else if (checkedItem.classList.contains("completed")) {
        checkedItem.classList.replace("completed", "uncompleted");
    }
}



/*
const sortBtn = document.querySelector('.sorting-todo');
sortBtn.addEventListener('click', sortList);

const todoList = document.querySelector('.todo-list');
const param = document.querySelectorAll('.liToSort');

const sortList = (event) => {
    event.preventDefault();
    const sortedList = todoList
  };  

/////try2

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