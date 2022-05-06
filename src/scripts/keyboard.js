import keys from './keys.js';
import { createElement } from './app.js';

class Keyboard {
  constructor() {
    this.capslock = 'off';
    this.shift = 'off';
    this.language = 'eng';
  }

  createKeyboard() {
    const keyboard = createElement('div', '', 'keyboard');
    const keyboardWrapper = createElement('div', '', 'keyboard-wrapper');
    for (let i = 0; i < keys.length; i += 1) {
      const row = createElement('div', '', 'row');
      keys[i].forEach((item) => {
        let charLang;
        if (item.keyChar.ru && item.keyChar.eng) {
          charLang = item.keyChar[this.language];
        } else {
          charLang = item.keyChar;
        }
        const key = createElement('div', charLang, 'key');
        key.dataset.keyCode = item.keyCode;
        if (item.keyChar.ru && item.keyChar.eng) {
          key.dataset.ru = item.keyChar.ru;
          key.dataset.eng = item.keyChar.eng;
        }
        if (item.withShift) {
          key.dataset.shiftRu = item.withShift.ru;
          key.dataset.shiftEng = item.withShift.eng;
        }
        if (item.keyClass) {
          key.classList.add(item.keyClass);
        }
        if (item.hasType) {
          key.dataset.hasType = false;
        }
        row.append(key);
      });
      keyboardWrapper.append(row);
    }
    keyboard.append(keyboardWrapper);
    return keyboard;
  }
}

export { Keyboard };
