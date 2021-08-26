export const doneItem = (event) => {
  event.preventDefault();
  const currentItem = event.target;
  currentItem.classList.toggle("linethrough");
};
