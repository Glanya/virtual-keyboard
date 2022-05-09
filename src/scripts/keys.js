const keys = [
  [
    { keyCode: 'Backquote', keyChar: { ru: 'ё', eng: '`' }, withShift: { ru: 'Ё', eng: '~' } },
    { keyCode: 'Digit1', keyChar: { ru: '1', eng: '1' }, withShift: { ru: '!', eng: '!' } },
    { keyCode: 'Digit2', keyChar: { ru: '2', eng: '2' }, withShift: { ru: '"', eng: '@' } },
    { keyCode: 'Digit3', keyChar: { ru: '3', eng: '3' }, withShift: { ru: '№', eng: '#' } },
    { keyCode: 'Digit4', keyChar: { ru: '4', eng: '4' }, withShift: { ru: ';', eng: '$' } },
    { keyCode: 'Digit5', keyChar: { ru: '5', eng: '5' }, withShift: { ru: '%', eng: '%' } },
    { keyCode: 'Digit6', keyChar: { ru: '6', eng: '6' }, withShift: { ru: ':', eng: '^' } },
    { keyCode: 'Digit7', keyChar: { ru: '7', eng: '7' }, withShift: { ru: '?', eng: '&' } },
    { keyCode: 'Digit8', keyChar: { ru: '8', eng: '8' }, withShift: { ru: '*', eng: '*' } },
    { keyCode: 'Digit9', keyChar: { ru: '9', eng: '9' }, withShift: { ru: '(', eng: '(' } },
    { keyCode: 'Digit0', keyChar: { ru: '0', eng: '0' }, withShift: { ru: ')', eng: ')' } },
    { keyCode: 'Minus', keyChar: { ru: '-', eng: '-' }, withShift: { ru: '_', eng: '_' } },
    { keyCode: 'Equal', keyChar: { ru: '=', eng: '=' }, withShift: { ru: '+', eng: '+' } },
    {
      keyCode: 'Backspace', keyChar: 'Backspace', hasType: false, keyClass: 'backspace',
    },
  ],

  [
    {
      keyCode: 'Tab', keyChar: 'Tab', hasType: false, keyClass: 'tab',
    },
    { keyCode: 'KeyQ', keyChar: { ru: 'й', eng: 'q' }, withShift: { ru: 'Й', eng: 'Q' } },
    { keyCode: 'KeyW', keyChar: { ru: 'ц', eng: 'w' }, withShift: { ru: 'Ц', eng: 'W' } },
    { keyCode: 'KeyE', keyChar: { ru: 'у', eng: 'e' }, withShift: { ru: 'У', eng: 'E' } },
    { keyCode: 'KeyR', keyChar: { ru: 'к', eng: 'r' }, withShift: { ru: 'К', eng: 'R' } },
    { keyCode: 'KeyT', keyChar: { ru: 'е', eng: 't' }, withShift: { ru: 'Е', eng: 'T' } },
    { keyCode: 'KeyY', keyChar: { ru: 'н', eng: 'y' }, withShift: { ru: 'Н', eng: 'Y' } },
    { keyCode: 'KeyU', keyChar: { ru: 'г', eng: 'u' }, withShift: { ru: 'Г', eng: 'U' } },
    { keyCode: 'KeyI', keyChar: { ru: 'ш', eng: 'i' }, withShift: { ru: 'Ш', eng: 'I' } },
    { keyCode: 'KeyO', keyChar: { ru: 'щ', eng: 'o' }, withShift: { ru: 'Щ', eng: 'O' } },
    { keyCode: 'KeyP', keyChar: { ru: 'з', eng: 'p' }, withShift: { ru: 'З', eng: 'P' } },
    { keyCode: 'BracketLeft', keyChar: { ru: 'х', eng: '[' }, withShift: { ru: 'Х', eng: '{' } },
    { keyCode: 'BracketRight', keyChar: { ru: 'ъ', eng: ']' }, withShift: { ru: 'Ъ', eng: '}' } },
    {
      keyCode: 'Backslash', keyChar: { ru: '\\', eng: '\\' }, withShift: { ru: '/', eng: '|' }, keyClass: 'backlash',
    },
    {
      keyCode: 'Delete', keyChar: 'Del', hasType: false, keyClass: 'delete',
    },
  ],

  [
    {
      keyCode: 'CapsLock', keyChar: 'Caps Lock', hasType: false, keyClass: 'capslock',
    },
    { keyCode: 'KeyA', keyChar: { ru: 'ф', eng: 'a' }, withShift: { ru: 'Ф', eng: 'A' } },
    { keyCode: 'KeyS', keyChar: { ru: 'ы', eng: 's' }, withShift: { ru: 'Ы', eng: 'S' } },
    { keyCode: 'KeyD', keyChar: { ru: 'в', eng: 'd' }, withShift: { ru: 'В', eng: 'D' } },
    { keyCode: 'KeyF', keyChar: { ru: 'а', eng: 'f' }, withShift: { ru: 'А', eng: 'F' } },
    { keyCode: 'KeyG', keyChar: { ru: 'п', eng: 'g' }, withShift: { ru: 'П', eng: 'G' } },
    { keyCode: 'KeyH', keyChar: { ru: 'р', eng: 'h' }, withShift: { ru: 'Р', eng: 'H' } },
    { keyCode: 'KeyJ', keyChar: { ru: 'о', eng: 'j' }, withShift: { ru: 'О', eng: 'J' } },
    { keyCode: 'KeyK', keyChar: { ru: 'л', eng: 'k' }, withShift: { ru: 'Л', eng: 'K' } },
    { keyCode: 'KeyL', keyChar: { ru: 'д', eng: 'l' }, withShift: { ru: 'Д', eng: 'L' } },
    { keyCode: 'Semicolon', keyChar: { ru: 'ж', eng: ';' }, withShift: { ru: 'Ж', eng: ':' } },
    { keyCode: 'Quote', keyChar: { ru: 'э', eng: '\'' }, withShift: { ru: 'Э', eng: '"' } },
    {
      keyCode: 'Enter', keyChar: 'Enter', hasType: false, keyClass: 'enter',
    },
  ],

  [
    {
      keyCode: 'ShiftLeft', keyChar: 'Shift', hasType: false, keyClass: 'shiftleft',
    },
    { keyCode: 'KeyZ', keyChar: { ru: 'я', eng: 'z' }, withShift: { ru: 'Я', eng: 'Z' } },
    { keyCode: 'KeyX', keyChar: { ru: 'ч', eng: 'x' }, withShift: { ru: 'Ч', eng: 'X' } },
    { keyCode: 'KeyC', keyChar: { ru: 'с', eng: 'c' }, withShift: { ru: 'С', eng: 'C' } },
    { keyCode: 'KeyV', keyChar: { ru: 'м', eng: 'v' }, withShift: { ru: 'М', eng: 'V' } },
    { keyCode: 'KeyB', keyChar: { ru: 'и', eng: 'b' }, withShift: { ru: 'И', eng: 'B' } },
    { keyCode: 'KeyN', keyChar: { ru: 'т', eng: 'n' }, withShift: { ru: 'Т', eng: 'N' } },
    { keyCode: 'KeyM', keyChar: { ru: 'ь', eng: 'm' }, withShift: { ru: 'Ь', eng: 'M' } },
    { keyCode: 'Comma', keyChar: { ru: 'б', eng: ',' }, withShift: { ru: 'Б', eng: '<' } },
    { keyCode: 'Period', keyChar: { ru: 'ю', eng: '.' }, withShift: { ru: 'Ю', eng: '>' } },
    { keyCode: 'Slash', keyChar: { ru: '.', eng: '/' }, withShift: { ru: ',', eng: '?' } },
    { keyCode: 'ArrowUp', keyChar: '▲', hasType: false },
    {
      keyCode: 'ShiftRight', keyChar: 'Shift', hasType: false, keyClass: 'shiftright',
    },
  ],

  [
    {
      keyCode: 'ControlLeft', keyChar: 'Ctrl', hasType: false, keyClass: 'ctrlleft',
    },
    {
      keyCode: 'MetaLeft', keyChar: 'Win', hasType: false, keyClass: 'win',
    },
    {
      keyCode: 'AltLeft', keyChar: 'Alt', hasType: false, keyClass: 'altleft',
    },
    {
      keyCode: 'Space', keyChar: ' ', hasType: false, keyClass: 'space',
    },
    {
      keyCode: 'AltRight', keyChar: 'Alt', hasType: false, keyClass: 'altright',
    },
    { keyCode: 'ArrowLeft', keyChar: '◄', hasType: false },
    { keyCode: 'ArrowDown', keyChar: '▼', hasType: false },
    { keyCode: 'ArrowRight', keyChar: '►', hasType: false },
    {
      keyCode: 'ControlRight', keyChar: 'Ctrl', hasType: false, keyClass: 'ctrlright',
    },
  ],
];

export default keys;
