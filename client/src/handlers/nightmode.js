const body = document.querySelector('body');
const headerTd = document.querySelector('h1');

// Switch style to night mode:
export const toggle = document.getElementById('toggle');

toggle.onclick = function (event) {
  console.log(event.target.value);
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  headerTd.classList.toggle('active');
};
