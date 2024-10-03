
let hour = 0;
let minute = 0;
let second = 0;
let counter = 0;
let timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function restart() {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  counter = 0;
  updateDisplay();
}

function stopwatch() {
  if (timer) {
    counter++;
    if (counter == 100) {
      second++;
      counter = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
    updateDisplay();
  }
  setTimeout(stopwatch, 10);
}

function updateDisplay() {
  document.getElementById("hr").innerHTML = padZero(hour);
  document.getElementById("min").innerHTML = padZero(minute);
  document.getElementById("sec").innerHTML = padZero(second);
  document.getElementById("count").innerHTML = padZero(counter);
}

function padZero(time) {
  return (time < 10) ? '0' + time : time;
}