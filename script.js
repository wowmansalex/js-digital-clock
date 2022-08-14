var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var secondsText = document.getElementById('seconds');
var minutesText = document.getElementById('minutes');
var hoursText = document.getElementById('hours');

setInterval (showSeconds, 1000);

function showSeconds() {
  seconds++;
  secondsText.innerText = seconds;
  minutesText.innerText = minutes;
  hoursText.innerText = hours;

  if (secondsText.innerText < 10) {
    secondsText.innerText = '0'+seconds;
  }
  if (secondsText.innerText > 59) {
    minutes++;
    secondsText.innerText = "00";
    seconds = 0; 
  } 
  if (minutesText.innerText > 59) {
    hours++;
    minutesText.innerText = "00";
    minutes = 0;
  }
  if (hours.innerText > 23) {
    hours = 0;
    hoursText.innerText = "00";
  }
}
