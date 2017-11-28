/* eslint no-console:0 */
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() { // eslint-disable-line no-unused-vars
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// regular
console.log('hello');

// interpolated
console.log('hello I am a %s string!', 'cool');

// styled
console.log('%c I am some great text', 'font-size: 20px; background-color: red; text-shadow: 1px 1px 0 blue;');

// warn
console.warn('WARNING!');

// error
console.error('FAIL!');

// info
console.info('meow');

// testing
console.assert(1 + 1 === 2, "You're right. Show nothing");
console.assert(1 === 2, 'That is wrong!');

// clearing
// console.clear();

// viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);

// grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Matt');
console.count('Jim');
console.count('Matt');
console.count('Jim');
console.count('Matt');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wattmalsh')
  .then(data => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// table
console.table(dogs);
