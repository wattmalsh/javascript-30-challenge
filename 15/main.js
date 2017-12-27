const items = JSON.parse(window.localStorage.getItem('items')) || [];
let maxId = items.reduce((a, b) => b.id > a ? b.id : a, 0) || 0;

const updateLocalStorage = () => window.localStorage.setItem('items', JSON.stringify(items));
const addToLocalStorage = (item) => { items.push(item); updateLocalStorage(); };
const removeFromLocalStorage = (index) => { items.splice(index, 1); updateLocalStorage(); };

const list = document.querySelector('.menu-list');
const input = document.querySelector('input[type="text"]');
const form = document.querySelector('.add-item');

const getItemIndex = elem => [...document.querySelectorAll('.menu-item')].indexOf(elem);

const toggleItem = (elem, checked) => {
  const check = elem.querySelector('.item-check');
  check.style.opacity = checked ? 1 : 0;
};

function handleToggleItem(elem) {
  const index = getItemIndex(elem);
  items[index].checked = !items[index].checked;
  toggleItem(elem, items[index].checked);
  updateLocalStorage();
}

function handleRemoveItem(elem) {
  const index = getItemIndex(elem);
  elem.parentElement.removeChild(elem);
  removeFromLocalStorage(index);
}

const createItem = (item) => {
  const elem = document.createElement('li');
  elem.id = item.id;
  elem.classList.add('menu-item');
  elem.innerHTML = `
    <div class="item-check">&#x1f32e;</div>
    <div class="item-text">${item.text}</div>
    <button class="remove-item">x</button>
  `;
  const check = elem.querySelector('.item-check');
  if (!item.checked) check.style.opacity = 0;
  return elem;
};

const appendItem = (item) => {
  list.appendChild(createItem(item));
};

function handleSubmit(e) {
  e.preventDefault();
  if (!input.value) return;
  maxId += 1;
  const item = { text: input.value, checked: true, id: maxId };
  appendItem(item);
  addToLocalStorage(item);
  list.scrollTop = list.scrollHeight;
  this.reset();
}

function handleFormClick(e) {
  if (e.srcElement.matches('.item-check')) handleToggleItem(e.srcElement.parentElement);
  if (e.srcElement.matches('.remove-item')) handleRemoveItem(e.srcElement.parentElement);
}

form.addEventListener('submit', handleSubmit);
list.addEventListener('click', handleFormClick);

window.onload = () => {
  if (!items) return;
  items.forEach(item => appendItem(item));
};
