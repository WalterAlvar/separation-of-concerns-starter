<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->

# Development strategy

## `for: Header`

### `type: html` (Header)

- Title with h1

### `type: css` (Header)

- "header": font-size

- "header": min-height,flex, justify-content, align-items

## `for: Menu`

### `type: html` (Menu)

- section with class called "menu"

- basic form

- input with class called 'todo-input'

- button with class called 'add-button'

  - icon with class called 'fas fa-plus'

- button with class called 'remove-button'

  - icon with class called 'fas fa-plus'

- button with class called 'clearAll-button'

  - icon with class called 'far fa-window-close'

- button with class called 'nightMood-button'

  - icon with class called 'fas fa-moon'

- div with class called 'select'

  - select with class called 'sorting-todo'

    - option with a value 'new->old'

    - option with a value 'old->new'

### `type: css` (Menu)

- container: width, margin-left, margin-right, display, box-shadow, background-color

- form: min-height, display, justify-content, align-items

- form input, form button: padding, font-size, border, background.

- form button: color, background, cursor, transition.

- form button:hover: background, color

- select: -webkit-appearance, -moz-appearance, appearance, outline, border

- .select: margin, position, overflow

- .select::after: content, position, background, top, right, padding, pointer-events

- select:hover::after: background, color

- select: color, width, cursor, padding, font-size

## `for: List`

### `type: html` (List)

- section

- div class called "user-list"

- ul class called "todo-list"

### `type: css` (List)

- user-list: display, justify-content, align-items, list-style, margin-top

- todo-list: min-width, list-style.

## `for: Footer`

### `type: html` (Footer)

- text

### `type: css` (Footer)

- footer: position, left, bottom, width, background-color, color, text-align, justify-items, height

- footer button:hover: background, color
