const timer = document.querySelector(".timer");

const timerLoop = setInterval(countdownTimer, 1000);

function countdownTimer() {
  //current time tc
  const tc = new Date() - 0;
  console.log(`tc = ${tc}`);

  //future time = tf
  const tf = new Date(2023, 11, 25, 00, 00, 00) - 0;
  console.log(`tf = ${tf}`);

  //time interval = delta T
  const deltaT = tf - tc;
  console.log(`deltaT = ${deltaT}`);

  //calculations
  //DAYS
  //there 1000ms in a second, 60 seconds in a minute,60 minutes in an hour and 24 hours in a day
  const daysCalc = deltaT / (1000 * 60 * 60 * 24);
  const days = Math.floor(daysCalc);

  //hours
  const hoursCalc = (daysCalc - days) * 24;
  const hours = Math.floor(hoursCalc);

  //min
  const minsCalc = (hoursCalc - hours) * 60;
  const mins = Math.floor(minsCalc);

  //secs
  const secsCalc = (minsCalc - mins) * 60;
  const secs = Math.floor(secsCalc);

  timer.innerHTML = `
<div data-label = "Days">${days}</div>
<div data-label = "Hours">${hours}</div>
<div class="colon">:</div>
<div data-label = "Mins">${mins}</div>
<div class="colon">:</div>
<div data-label = "secs">${secs}</div>
`;

  if (deltaT < 0) {
    clearInterval(timerLoop);
    timer.innerHTML = "<h1>Merry Christmas!</h1>";
  }
}
