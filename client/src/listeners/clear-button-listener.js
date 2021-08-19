import { clearList } from '../handlers/clear-list.js';

const clearButton = document.querySelector('.clearAll-button');
clearButton.addEventListener('click', clearList);
