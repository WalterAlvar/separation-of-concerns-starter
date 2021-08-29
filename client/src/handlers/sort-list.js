const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.sorting-todo');

export const filterToDo = (e) => {
    const toDos = todoList.childNodes;
    toDos.forEach(function(toDos){
      switch(e.target.value){
        case "all":
          todo.style.display = 'flex';
          break;
        case "completed":
          if (todo.classList.contains('linethrough')){
            todo.style.display = 'flex';
          }else{
            todo.style.display = 'none';
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains('linethrough')){
            todo.style.display = 'flex';
          }else{
            todo.style.display = 'none';
          }
          break;    
      }
    });
  }