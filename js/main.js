const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const milliseconds = currentDate.getMilliseconds();
  const secondsRatio = (currentDate.getSeconds() + milliseconds / 1000) / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
  if (element.classList.contains('second')) {
    element.style.setProperty('--shadow', `${rotationRatio * 20}px`);
  }
}

setInterval(setClock, 1000);
setClock();
