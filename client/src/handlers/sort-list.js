const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.sorting-todo');

export const filterToDo = (e) => {
    const toDos = todoList.childNodes;
    toDos.forEach(function(toDos){
      switch(e.target.value){
        case "all":
          toDos.style.display = 'flex';
          break;
        case "completed":
          if (toDos.classList.contains('linethrough')){
            toDos.style.display = 'flex';
          }else{
            toDos.style.display = 'none';
          }
          break;
        case "uncompleted":
          if (!toDos.classList.contains('linethrough')){
            toDos.style.display = 'flex';
          }else{
            toDos.style.display = 'none';
          }
          break;    
      }
    });
  }