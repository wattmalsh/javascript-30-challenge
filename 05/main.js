function toggleClass(element, className) {
  element.classList.toggle(className);
}

const pokemons = Array.from(document.getElementsByClassName('pokemon'));

pokemons.forEach((pokemon) => {
  pokemon.addEventListener('click', () => {
    const paragraphs = Array.from(pokemon.getElementsByTagName('p'));
    toggleClass(pokemon, 'zoom-in');
    toggleClass(paragraphs[0], 'drop-down');
    toggleClass(paragraphs[1], 'make-bigger');
    toggleClass(paragraphs[2], 'drop-up');
  });
});
