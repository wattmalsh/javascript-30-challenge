const poop = document.querySelector('.poop');
const buttons = document.querySelectorAll('button');

let scale = 2;
let crayCray = false;
let lastX = null;
let lastY = null;

const addShadow = (x, y) => {
  const midX = window.innerWidth / 2;
  const midY = window.innerHeight / 2;

  const percFromCenterX = (x - midX) / midX;
  const percFromCenterY = (y - midY) / midY;
  const pxX = Math.floor((percFromCenterX * 10) * scale);
  const pxY = Math.floor((percFromCenterY * 10) * scale);

  poop.style.textShadow = `${pxX}px ${pxY}px 5px rgba(0,0,0,1)`;
  if (crayCray) poop.style.textShadow += `, ${-pxX}px ${-pxY}px 3px red`;
};

const handleMouseMove = (e) => {
  const { pageX: x, pageY: y } = e;
  lastX = x;
  lastY = y;
  addShadow(x, y);
};

function handleButtonClick() {
  if (this.matches('button[name="cray-cray"]')) crayCray = !crayCray;
  if (this.matches('button[name="scale"]')) scale = scale === 2 ? 8 : 2;
  addShadow(lastX, lastY);
}

document.addEventListener('mousemove', handleMouseMove);
buttons.forEach(button => button.addEventListener('click', handleButtonClick));
