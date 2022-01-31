// Initializing a new date for the counter to count down
const endDate = "Dec 31, 2022 23:59:59 GMT+0530";

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
    // Display the time countdown as 0 once the timeline is expired
    document.getElementById("sec").innerHTML = 0;
    document.getElementById("mins").innerHTML = 0;
    document.getElementById("hrs").innerHTML = 0;
    document.getElementById("day").innerHTML = 0;
  }
}, 1000);
