const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

function print(data, element) {
  data.forEach((obj) => {
    const p = document.createElement('p');
    p.innerText = JSON.stringify(obj);
    element.appendChild(p);
  });
}

window.onload = () => {
  print(people, document.querySelector('.people'));
  print(comments, document.querySelector('.comments'));
};

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const over19 = (person) => {
  const age = (new Date()).getFullYear() - person.year;
  return age > 19;
};
const some = people.some(over19);
const every = people.every(over19);
describe('Array.prototype.some()', () => {
  it('Should return an boolean', () => {
    expect(some).to.be.a('boolean');
  });
  it('Should be equal to true', () => {
    expect(some).to.be(true);
  });
});
describe('Array.prototype.every()', () => {
  it('Should return an boolean', () => {
    expect(every).to.be.a('boolean');
  });
  it('Should be equal to false', () => {
    expect(every).to.be(false);
  });
});

const target = obj => obj.id === 823423;
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const find = comments.find(target);
describe('Array.prototype.find()', () => {
  it('Should return an object', () => {
    expect(find).to.be.an('object');
  });
  it('Should return the object with text "Super good"', () => {
    expect(find.text).to.equal('Super good');
  });
});

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIndex = comments.findIndex(target);
comments.splice(findIndex, 1);
describe('Array.prototype.findIndex()', () => {
  it('Should find the correct index of 1', () => {
    expect(findIndex).to.equal(1);
  });
  it('Should remove the item from the array', () => {
    expect(comments).to.have.length(4);
  });
});
