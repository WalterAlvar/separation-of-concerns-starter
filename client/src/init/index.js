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

const markCompleted = (event) => {
  event.preventDefault();
  const checked = document.getElementById('chk-');
  const todoListItems = ul.getElementsByTagName("li");
    if (todoListItems.checked){

    }

}

function myFunction() {
    var x = document.getElementById("myDIV");

    /*Here you missspelled "mystyle"*/
    if (x.classList.contains("mystyle")) {
        x.classList.replace("mystyle", "mystyle1");
    } else if (x.classList.contains("mystyle1")) {
        x.classList.replace("mystyle1", "mystyle");
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