const createElement = (el, innerHTML, ...classes) => {
  const element = document.createElement(el);
  element.classList.add(...classes);
  element.innerHTML = innerHTML;
  return element;
};

export { createElement };
