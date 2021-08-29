<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->

# Development strategy

## 0.Setup

- fork the template repo `separation-of-concerns-starter`
- turn on GitHub pages.
- invite collaborators to repo.
- write the user stories.
- write the first strategy plan.
- Design a simple wireframe to set guidelines for UI/UX design.
- a simple README.md

---

## 1. Initialize the home page

**A user can see all the items in their list**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `design1`.
- This branch is merged to `master` branch after completion.

### Task A

`index.html`:

- this issue developed on a branch `design1`.
- add title with `h1`
- add section with class called `menu`
- add basic `form`
- add input with class called `todo-input`
- add button with class called `add-button`
  - add icon with class called `fas fa-plus`
- add button with class called `remove-button`
  - add icon with class called `fas fa-plus`
- add button with class called `clearAll-button`
  - add icon with class called `far fa-window-close`
- add button with class called `nightMood-button`
  - add icon with class called `fas fa-moon`
- add div with class called `select`
  - add select with class called `sorting-todo`
    - add option with a value `new->old`
    - add option with a value `old->new`
- add section
- add div class called `user-list`

### Task B

`style.css` :

- this issue developed on a branch `design1`.
- `header`: font-size
- `header`: min-height,flex, justify-content, align-items
- `container`: width, margin-left, margin-right, display, box-shadow, background-color
- `form`: min-height, display, justify-content, align-items
- `form input, form button:` padding, font-size, border, background.
- `form button`: color, background, cursor, transition.
- `form button`:hover: background, color
- `select`: -webkit-appearance, -moz-appearance, appearance, outline, border
- `.select`: margin, position, overflow
- `.select::after`: content, position, background, top, right, padding, pointer-events
- `select:hover::after`: background, color
- `select`: color, width, cursor, padding, font-size
- `user-list`: display, justify-content, align-items, list-style, margin-top
- `todo-list`: min-width, list-style.
- `footer`: position, left, bottom, width, background-color, color, text-align, justify-items, height
- `footer button:hover`: background, color

---

## 2. add todo

**A user can add a new item to their list**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `addTodo`.
- This branch is merged to `master` branch after completion.

### Task A

`add-item.js`:

- this issue developed in a branch `addTodo`
- create a file `add-item.js`
- select query `.todo-input` and `.todo-list`
- checking if input is empty and alert `Item can not be empty`
- get input value from user `newToDoName = todoInput.value`
- check input value length and alert with `Length should be less than 80 characters`
- create `div`, `li`, `ìnput`
- assign input value to `checkbox`
- append `checkbox` to the `li`
- create `text node` after checkbox
- append `text node` to the `li`
- clear input value

### Task B

`add-button-listener.js`:

- this issue developed on a branch `addTodo`
- import `add-item.js` handler
- get `input = button` add todo and add event listener

---
## 3. remove todo

**A user can remove any item from their list**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `deepa-remove`.
- This branch is merged to `master` branch after completion.

### Task A

`remove-item.js`:

- this issue developed in a branch `deepa-remove`
- create a file `remove-item.js`
- select query `.todo-list`
- get `li` items
- with `for-loop` checked item will be reomeved.

### Task B

`add-button-listener.js`:

- this issue developed on a branch `deepa-thomas`
- import `remove-item.js` handler
- select query `.remove-button`
- add event listener

---
## 4. clear todo

**A user can clear the list**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `clearlist`.
- This branch is merged to `master` branch after completion.

### Task A

`clear-list.js`:

- this issue developed in a branch `clearlist`
- create a file `clear-list.js`
- select query `.todo-list`
- add confirm `Are you sure you want to clear the entire list?`
- with `while-loop` all item will be removed.

### Task B

`clear-button-listener.js`:

- this issue developed on a branch `clearlist`
- import `clear-list.js` handler
- select query `.clearAll-button`
- add event listener

---
## 5. change mood

**A user can change mood with nightmood**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `Nightmode`.
- This branch is merged to `master` branch after completion.

### Task A

`nightmode.js`:

- this issue developed in a branch `Nightmode`
- create a file `nightmode.js`
- select query `body`, `h1`
- get element `toggle`
- with `toggle.onclick`, `body`, `headerTd` and `toggle` active.

### Task B

`nightmode-listener.js`:

- this issue developed on a branch `Nightmode`
- import `nightmode.js` handler
- get element by id `set-color`
- add event listener

---
