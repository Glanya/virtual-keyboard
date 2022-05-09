import { createElement } from './index.js';
import { Keyboard } from './keyboard.js';

const keyboard = new Keyboard();

const createPage = () => {
  const body = document.querySelector('body');
  const title = 'Virtual Keyboard';
  const description = 'Клавиатура создана в операционной системе Windows';
  const language = 'Для переключения языка комбинация: левыe shift + alt';

  const wrapper = createElement('div', '', 'wrapper');

  wrapper.append(createElement('h1', title, 'title'));
  wrapper.append(createElement('textarea', '', 'textarea'));
  wrapper.append(keyboard.createKeyboard());
  wrapper.append(createElement('p', description, 'description'));
  wrapper.append(createElement('p', language, 'language'));

  body.append(wrapper);
};
createPage();

document.addEventListener('keydown', (e) => {
  const keyBtn = document.querySelector(`[data-code=${e.code}]`);
  keyBtn.classList.add('active');
  keyboard.pressKey(e, keyBtn);
});

document.addEventListener('keyup', (e) => {
  const keyBtn = document.querySelector(`[data-code=${e.code}]`);
  keyBtn.classList.remove('active');
  if (keyBtn.dataset.code === 'ShiftLeft' || keyBtn.dataset.code === 'ShiftRight') {
    keyboard.removeShift(keyBtn);
  }
});

document.querySelector('.keyboard').addEventListener('mousedown', (e) => {
  if (e.target.closest('.key')) {
    const keyBtn = e.target.closest('.key');
    keyBtn.classList.add('active');
    keyboard.pressKey(e, keyBtn);
  }
});

document.querySelector('.keyboard').addEventListener('mouseup', (e) => {
  if (e.target.closest('.key')) {
    const keyBtn = e.target.closest('.key');
    keyBtn.classList.remove('active');
    if (keyBtn.dataset.code === 'ShiftLeft' || keyBtn.dataset.code === 'ShiftRight') {
      keyboard.removeShift(keyBtn);
    }
  }
});
