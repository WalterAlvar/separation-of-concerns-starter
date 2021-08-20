import { removeItem } from '../handlers/remove-item.js';

const removeButton = document.querySelector('.remove-button');
removeButton.addEventListener('click', removeItem);