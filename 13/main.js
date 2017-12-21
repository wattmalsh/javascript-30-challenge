// MSDN's Measuring Element Dimension and Location
// https://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx

const figures = document.querySelectorAll('figure');

function debounce(func, timeout) {
  let ready = true;
  const args = arguments;
  return function debounceFunc(e) {
    if (ready) {
      func.call(this, e, ...args);
      ready = false;
      setTimeout(() => { ready = true; }, timeout);
    }
  };
}

let handleScroll = () => {
  figures.forEach((figure) => {
    const btmCondition = window.scrollY + window.innerHeight >
      figure.offsetTop + (figure.scrollHeight * 0.5);
    const topCondition = window.scrollY < figure.offsetTop + (figure.scrollHeight * 0.5);
    if (btmCondition && topCondition) {
      figure.classList.add('visible');
    } else {
      figure.classList.remove('visible');
    }
  });
};
handleScroll = debounce(handleScroll, 25);

document.addEventListener('scroll', handleScroll);
