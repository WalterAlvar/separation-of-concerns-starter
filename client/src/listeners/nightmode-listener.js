import { toggle } from '../handlers/nightmode.js';

//const nightButton = document.querySelector()

const nightButton = document.getElementById('toggle');

nightButton.addEventListener('click', toggle);
