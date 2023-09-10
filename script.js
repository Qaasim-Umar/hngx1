const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateDateTime() {
  const currentDatetime = new Date();
  const currentDay = daysOfWeek[currentDatetime.getUTCDay()];
  const currentUTCTimeInMilliseconds = currentDatetime.getTime();

  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `Current Day: ${currentDay}`;
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC Time : ${currentUTCTimeInMilliseconds} ms`;
}

setInterval(updateDateTime, 1000);

updateDateTime();
