const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const inventorsElement = document.getElementById('inventors');

inventors.forEach((inventor) => {
  const p = document.createElement('p');
  p.innerHTML = JSON.stringify(inventor);
  inventorsElement.appendChild(p);
});

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const peopleElement = document.getElementById('people');

people.forEach((person) => {
  const span = document.createElement('span');
  span.innerHTML = person;
  peopleElement.appendChild(span);
});

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filter = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
describe("1. Filter the list of inventors for those who were born in the 1500's", () => {
  it('Should return an array', () => {
    expect(filter).to.be.an('array');
  });
  it('Should have a length of 2', () => {
    expect(filter).to.have.length(2);
  });
});

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const map = inventors.map(investor => [investor.first, investor.last]);
describe("2. Give us an array of the inventors' first and last names", () => {
  it('Should return an array', () => {
    expect(map).to.be.an('array');
  });
  it('Should have a length of 12', () => {
    expect(map).to.have.length(12);
  });
  it('Should contain an array of arrays of length 2', () => {
    expect(map[0]).to.have.length(2);
  });
});

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sort = inventors.sort((a, b) => a.year - b.year);
describe('3. Sort the inventors by birthdate, oldest to youngest', () => {
  it('Should return an array', () => {
    expect(sort).to.be.an('array');
  });
  it('Should have a length of 12', () => {
    expect(sort).to.have.length(12);
  });
  it('Should have Nicolaus at index 0', () => {
    expect(sort[0].first).to.eql('Nicolaus');
  });
});

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const reduce = inventors.reduce((a,b) => a + b.passed - b.year, 0);
describe("4. How many years did all the inventors live?", () => {
  it('Should return an number', () => {
    expect(reduce).to.be.an('number');
  });
  it('Should be equal to 861',() => {
    expect(reduce).to.eql(861);
  });
});

// 5. Sort the inventors by years lived
const inventors2 = inventors.map((a) => Object.assign(a, {living: a.passed - a.year}))
const sort2 = inventors2.sort((a, b) => b.passed - b.year - (a.passed - a.year))
describe('5. Sort the inventors by years lived', () => {
  it('Should return an array', () => {
    expect(sort2).to.be.an('array');
  });
  it('Should have a length of 12', () => {
    expect(sort2).to.have.length(12);
  });
  it('Should have Lise at index 0', () => {
    expect(sort2[0].first).to.eql('Lise');
  });
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevards = ['Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', "Boulevard de l'Amiral-Bruix", 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime', 'Boulevard Haussmann', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard de Rochechouart', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone'];
const filter2 = boulevards.filter((boulevard) => boulevard.match(/de/));
describe("6. create a list of Boulevards in Paris that contain 'de' anywhere in the name", () => {
  it('Should return an array', () => {
    expect(filter2).to.be.an('array');
  });
  it('Should have a length of 12', () => {
    expect(filter2).to.have.length(12);
  });
  it("Should contain the letters 'de'", () => {
    expect(filter2[0]).to.have.string('de');
  });
});

// 7. sort Exercise
// Sort the people alphabetically by last name
const sort3 = people.sort((a,b) => a.split(',')[1] > b.split(',')[1] ? 1 : -1);
describe('7. sort Exercise', () => {
  it('Should return an array', () => {
    expect(sort3).to.be.an('array');
  });
  it('Should have a length of 41', () => {
    expect(sort3).to.have.length(41);
  });
  it('Should have Bierce at index 0', () => {
    expect(sort3[0]).to.have.string('Bierce');
  });
});

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const reduce2 = data.reduce((a, b) => { b in a ? a[b]++ : a[b] = 1; return a; }, {})
describe('8. Reduce Exercise', () => {
  it('Should return an object', () => {
    expect(reduce2).to.be.an('object');
  });
  it('Should have 2 bikes', () => {
    expect(reduce2.bike).to.eql(2);
  });
});
