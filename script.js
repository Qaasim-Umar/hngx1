const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateDateAndTime() {
  const currentDatetime = new Date();
  const currentDay = daysOfTheWeek[currentDatetime.getUTCDay()];
  const currentUTCTime = currentDatetime.toUTCString();

  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `Current Day: ${currentDay}`;
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC Time: ${currentUTCTime}`;
}

setInterval(updateDateAndTime, 1000);
updateDateAndTime();
