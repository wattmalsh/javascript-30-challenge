// secret state
const secrets = {
  makeItSnow: {
    keys: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    display: '&uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; b a',
    codename: 'Konami',
  },
  killSnow: {
    keys: 'grinch'.split(''),
    display: 'grinch'.replace(/./g, '$& '),
    codename: 'Selfish',
  },
};
const sequence = [];

// snow state
const windSpeeds = ['50s', '15s', '3s', '1s'];
const fallSpeeds = ['.5s', '1s', '5s', '10s', '15s'];
let snowing = false;
let windDirection = 1; // 1 === right, -1 === left, 0 === null
let windSpeed = 1; // between -3 and 3
let windSpeedInSeconds = '15s';
let fallSpeed = 3;
let fallSpeedInSeconds = '5s';

// elements
const snowContainerElem = document.querySelector('.snow-container');
const secretElem = snowContainerElem.querySelector('#secret');
const codenameElem = snowContainerElem.querySelector('#codename');
const optionsElem = snowContainerElem.querySelector('.options');
const windSpeedButtons = optionsElem.querySelectorAll('.wind-speed');
const fallSpeedButtons = optionsElem.querySelectorAll('.fall-speed');

const createSnowflake = () => {
  const snowflake = document.createElement('div');
  const topPerc = 0;
  const leftPerc = Math.floor(Math.random() * 100);
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${leftPerc}%`;
  snowflake.style.top = '-8px';
  snowContainerElem.appendChild(snowflake);
  setTimeout(() => {
    snowflake.style.top = `${topPerc + 100}%`;
    snowflake.style.left = `${leftPerc + (windDirection * 100)}%`;
    snowflake.style.transition = `top ${fallSpeedInSeconds} linear, left ${windSpeedInSeconds} linear`;
  }, 100);
  setTimeout(() => snowflake.remove(), 11000);
};

const updateSnowflakeSpeed = () => {
  const snowflakes = snowContainerElem.querySelectorAll('.snowflake');
  snowflakes.forEach((snowflake) => {
    setTimeout(() => {
      const topPx = parseFloat(window.getComputedStyle(snowflake).top);
      const leftPx = parseFloat(window.getComputedStyle(snowflake).left);
      const height = snowContainerElem.clientHeight;
      const width = snowContainerElem.clientWidth * windDirection;
      snowflake.style.top = `${topPx + height}px`;
      snowflake.style.left = `${leftPx + width}px`;
      snowflake.style.transition = `top ${fallSpeedInSeconds} linear, left ${windSpeedInSeconds} linear`;
    }, 100);
  });
};

const makeItSnow = () => {
  snowing = true;
  secretElem.innerHTML = secrets.killSnow.display;
  codenameElem.innerHTML = secrets.killSnow.codename;
  optionsElem.style.opacity = 1;
  const inner = () => {
    const delay = Math.floor(Math.random() * 5000) / 10;
    if (snowing) {
      setTimeout(() => {
        createSnowflake();
        inner();
      }, delay);
    }
  };
  inner();
};

const killSnow = () => {
  snowing = false;
  secretElem.innerHTML = secrets.makeItSnow.display;
  codenameElem.innerHTML = secrets.makeItSnow.codename;
  optionsElem.style.opacity = 0;
};

const handleKeyDown = (e) => {
  const secret = snowing ? secrets.killSnow.keys : secrets.makeItSnow.keys;
  if (secret[sequence.length] === e.key) {
    sequence.push(e.key);
  } else {
    sequence.length = 0;
  }
  if (sequence.length === secret.length) {
    (snowing ? killSnow : makeItSnow)();
    sequence.length = 0;
  }
};

function handleWindSpeedChange() {
  windSpeed += Number(this.dataset.speed);
  windSpeed = Math.max(-3, windSpeed);
  windSpeed = Math.min(3, windSpeed);
  windSpeedInSeconds = windSpeeds[Math.abs(windSpeed)];
  if (windSpeed > 0) { windDirection = 1; } else
  if (windSpeed < 0) { windDirection = -1; } else
  if (windSpeed === 0) { windDirection = 0; }
  updateSnowflakeSpeed();
}

function handleFallSpeedChange() {
  fallSpeed += Number(this.dataset.speed);
  fallSpeed = Math.max(0, fallSpeed);
  fallSpeed = Math.min(3, fallSpeed);
  fallSpeedInSeconds = fallSpeeds[fallSpeed];
  updateSnowflakeSpeed();
}

document.addEventListener('keydown', handleKeyDown);
windSpeedButtons.forEach(btn => btn.addEventListener('click', handleWindSpeedChange));
fallSpeedButtons.forEach(btn => btn.addEventListener('click', handleFallSpeedChange));
