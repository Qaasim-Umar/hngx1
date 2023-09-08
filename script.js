// JavaScript in script.js to set the current day of the week and time in UTC
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDatetime = new Date();
const currentDay = daysOfWeek[currentDatetime.getUTCDay()];
const currentUTCTime = currentDatetime.toUTCString(); // Display time in UTC

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;
document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime}`;
