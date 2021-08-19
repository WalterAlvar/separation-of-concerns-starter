const todoList = document.querySelector('.todo-list');

export const removeItem = (event) => {
    event.preventDefault();
    const ul = document.getElementById("ul_o");
    const todoListItems = ul.getElementsByTagName("li");
    for (let i = 0; i < todoListItems.length; i++) {
       // if(document.getElementById('chk-'+todoListItems[i].innerText).checked){
        // todoList.removeChild(todoListItems[i]);
       // }
    }
}
