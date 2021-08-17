import { addItem } from '../handlers/add-item.js';

const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', addItem);
