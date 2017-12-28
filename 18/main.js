const ul = document.querySelector('ul');
const button = document.querySelector('button');
const span = document.querySelector('span');

const times = [];
while (times.length < 20) {
  const hour = Math.ceil(Math.random() * 100);
  let minute = Math.floor(Math.random() * 60);
  let second = Math.floor(Math.random() * 60);
  minute = minute < 10 ? '0'.concat(minute) : minute;
  second = second < 10 ? '0'.concat(second) : second;
  times.push(`${hour}:${minute}:${second}`);
}

ul.innerHTML = times.map(time => `<li>${time}</li>`).join('');

const handleButtonClick = () => {
  const total = times.reduce((a, b) => {
    a = a.split(':').map(Number);
    b = b.split(':').map(Number);

    let sec = (a[2] + b[2]) % 60;
    sec = sec < 10 ? '0'.concat(sec) : sec;

    const minExtra = Math.floor((a[2] + b[2]) / 60);
    let min = (a[1] + b[1] + minExtra) % 60;
    min = min < 10 ? '0'.concat(min) : min;

    const hourExtra = Math.floor((a[1] + b[1] + minExtra) / 60);
    const hour = a[0] + b[0] + hourExtra;

    return `${hour}:${min}:${sec}`;
  });

  span.innerHTML = total;
};

button.addEventListener('click', handleButtonClick);
