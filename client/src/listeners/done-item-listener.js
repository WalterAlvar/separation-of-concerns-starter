import { doneItem } from '../handlers/done-item.js';

const doneLi = document.querySelector('.todo-list');
doneLi.addEventListener('click', doneItem);
