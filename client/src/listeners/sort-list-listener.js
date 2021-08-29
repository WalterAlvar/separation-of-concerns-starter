import { filterToDo } from '../handlers/sort-list.js';

const filterOpt = document.querySelector('.sorting-todo');
filterOpt.addEventListener('change', filterToDo);
