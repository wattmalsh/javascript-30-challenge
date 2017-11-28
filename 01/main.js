window.onload = () => {
  const lis = document.getElementsByTagName('li');
  document.addEventListener('keypress', (e) => {
    for (let i = 0; i < lis.length; i += 1) {
      const li = lis[i];
      const letter = li.children[0].innerText.toLowerCase();
      const sound = li.children[1].innerText.toLowerCase();
      if (e.key === letter) {
        const audio = new Audio(`sounds/${sound}.wav`);
        audio.play();
        li.animate([
          { border: '0' },
          { border: '1px solid black' },
        ], {
          duration: 50,
          direction: 'alternate',
          iterations: 2,
        });
      }
    }
  });
};
