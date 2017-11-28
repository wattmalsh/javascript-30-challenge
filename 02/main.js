window.onload = () => {
  setInterval(function() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    let hour = now.getHours();
    hour = hour === 0 ? 12 : hour;
    hour = hour > 12 ? hour - 12 : hour;

    const hourHand = document.getElementsByClassName('hour')[0];
    const minuteHand = document.getElementsByClassName('minute')[0];
    const secondHand = document.getElementsByClassName('second')[0];

    const hourDeg = -90 + hour * 30;
    const minuteDeg = -90 + minute * 6;
    const secondDeg = -90 + second * 6;

    // 12 hours = 360 degrees, -90 + 1 hour * 30
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    // 60 seconds = 360 degrees, -90 + 1 sec * 6
    // 60 minutes = 360 degrees
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  }, 1000);
};
