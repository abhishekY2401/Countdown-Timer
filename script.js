// Initializing a new date for the counter to count down
const endDate = "Dec 31, 2021 23:59:59 GMT+0530";

const countDown = setInterval(function UpdateTime() {
  let todayDate = new Date();

  // Difference between two dates
  let diffDate = Date.parse(endDate) - Date.parse(todayDate);

  // Calculating time in days, hours, mins and seconds
  const second = Math.floor((diffDate / 1000) % 60);
  const minutes = Math.floor((diffDate / 1000 / 60) % 60);
  const hours = Math.floor((diffDate / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));

  // Display the time countdown on the web page
  document.getElementById("sec").innerHTML = second;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("day").innerHTML = days;

  if (diffDate <= 0) {
    clearInterval(countDown);
    document.getElementById("infoTime").innerHTML = "EXPIRED";
  }
}, 1000);