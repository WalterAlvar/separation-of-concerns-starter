import { editItem } from '../handlers/edit-item.js';

const editButton = document.querySelector('.edit-button');
editButton.addEventListener('click', editItem);
