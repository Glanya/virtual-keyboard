import keys from './keys.js';
import { createElement } from './index.js';

class Keyboard {
  constructor() {
    this.capslock = false;
    this.shift = false;
    this.language = 'eng';
    this.textarea = document.querySelector('textarea');
  }

  createKeyboard() {
    this.saveLanguage();
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
        key.dataset.code = item.keyCode;
        if (item.keyChar.ru && item.keyChar.eng) {
          key.dataset.ru = item.keyChar.ru;
          key.dataset.eng = item.keyChar.eng;
        }
        if (item.withShift) {
          key.dataset.ruShift = item.withShift.ru;
          key.dataset.engShift = item.withShift.eng;
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

  changeLanguage() {
    if (this.language === 'ru') {
      this.language = 'eng';
    } else {
      this.language = 'ru';
    }

    document.querySelectorAll('.key').forEach((e) => {
      if (e.dataset[this.language]) {
        e.innerHTML = e.dataset[this.language];
      }
    });
    localStorage.setItem('language', this.language);
  }

  saveLanguage() {
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language');
    } else {
      localStorage.setItem('language', this.language);
    }
  }

  pressCapsLock() {
    if (this.capslock === true) {
      this.capslock = false;
    } else {
      this.capslock = true;
    }

    document.querySelectorAll('.key').forEach((e) => {
      if (e.dataset[this.language]) {
        if (this.capslock === true) {
          e.innerHTML = e.dataset[this.language].toUpperCase();
        } else {
          e.innerHTML = e.dataset[this.language];
        }
      }
    });
  }

  pressShift() {
    if (this.shift === true) {
      this.shift = false;
    } else {
      this.shift = true;
    }
    document.querySelectorAll('.key').forEach((e) => {
      if (e.dataset[`${this.language}Shift`]) {
        e.innerHTML = e.dataset[`${this.language}Shift`];
      }
    });
  }

  removeShift() {
    this.shift = false;
    document.querySelectorAll('.key').forEach((e) => {
      if (e.dataset[`${this.language}Shift`]) {
        e.innerHTML = e.dataset[this.language];
      }
    });
  }

  pressKey(e, key) {
    e.preventDefault();
    const keyName = key.dataset.code;
    if (keyName === 'CapsLock') {
      this.pressCapsLock();
    }
    if ((keyName === 'AltLeft' && e.shiftKey)
    || (keyName === 'ShiftLeft' && e.altKey)) {
      this.changeLanguage();
    }
    if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
      this.pressShift();
    }
  }
}

export { Keyboard };
