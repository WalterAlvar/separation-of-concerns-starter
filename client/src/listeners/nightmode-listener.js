import { toggle } from '../handlers/nightmode.js';

//const nightButton = document.querySelector()

const nightButton = document.getElementById('set-color');

nightButton.addEventListener('click', toggle);
