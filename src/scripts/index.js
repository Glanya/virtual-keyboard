import { createElement } from './app.js';
import { Keyboard } from './keyboard.js';

const createPage = () => {
  const body = document.querySelector('body');
  const title = 'Virtual Keyboard';
  const description = 'Клавиатура создана в операционной системе Windows';
  const language = 'Для переключения языка комбинация: левыe ctrl + alt';

  const wrapper = createElement('div', '', 'wrapper');
  const keyboard = new Keyboard();
  wrapper.append(createElement('h1', title, 'title'));
  wrapper.append(createElement('textarea', '', 'textarea'));
  wrapper.append(keyboard.createKeyboard());
  wrapper.append(createElement('p', description, 'description'));
  wrapper.append(createElement('p', language, 'language'));

  body.append(wrapper);
};

createPage();
