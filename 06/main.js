const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities;
window.onload = function () {
  fetch(endpoint).then(response => response.json()).then((data) => {
    cities = data.map(a => `${a.city}, ${a.state}`).sort();
  });
};

const input = document.querySelector('input[name="search"]');
const origAttr = input.getAttribute('value');

function createResult(innerHTML) {
  const result = document.createElement('div');
  const resultInner = document.createElement('div');
  resultInner.innerHTML = innerHTML;
  result.classList.add('result');
  resultInner.classList.add('result-inner');
  result.appendChild(resultInner);
  return result;
}

input.addEventListener('keyup', () => {
  const old = document.querySelector('.results');
  const newer = document.createElement('div');
  newer.classList.add('results');
  if (input.value !== origAttr && input.value !== '') {
    const regex = new RegExp(input.value, 'ig');
    const filtered = cities.filter(city => city.match(regex));
    filtered.forEach((city) => {
      const innerHTML = city.replace(regex, '<span>$&</span>');
      const result = createResult(innerHTML);
      newer.appendChild(result);
    });
  }
  document.querySelector('body').replaceChild(newer, old);
});
input.addEventListener('focusin', () => {
  if (input.value === origAttr) input.value = '';
});
input.addEventListener('focusout', () => {
  if (!input.value) input.value = origAttr;
});
