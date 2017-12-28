const ul = document.querySelector('ul');
const button = document.querySelector('button');

let movies = ['The Life of Oharu', 'La Ceremonie', 'A Man Escaped', 'Nosferatu', 'Stagecoach', 'The Big Lebowski', 'The Thief of Bagdad', 'The Enigma of Kaspar Hauser', 'El Topo', 'The Last Picture Show'];

const appendMovie = (movie) => {
  const li = document.createElement('li');
  li.innerHTML = movie;
  ul.appendChild(li);
};

movies.forEach(movie => appendMovie(movie));

const stripArticle = str => str.replace(/The |La |A |An |El /, '').trim();

const sortMovies = () => {
  movies = movies.sort((a, b) => stripArticle(a) > stripArticle(b));
  ul.innerHTML = movies.map(movie => `<li>${movie}</li>`).join('');
};

button.addEventListener('click', sortMovies);
