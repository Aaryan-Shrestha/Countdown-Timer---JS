const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// VARIABLES
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// ADDING 10 MORE DAYS TO FUTURE DATE DYNAMICALLY
// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDay();

// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// HARD CODING THE FOLLOWING FUTURE DATE
let futureDate = new Date(2023, 1, 25, 00, 00, 00);

const year = futureDate.getFullYear();
const monthIndex = futureDate.getMonth(); // GIVES INDEX
const weekDayIndex = futureDate.getDay(); // GIVES INDEX
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekdays[weekDayIndex]}, ${date} ${months[monthIndex]} ${year}, ${hours}:${minutes}am`;

// FUTURE TIME IN MILLISECOND
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime(); // GIVES MILLISECOND (ms)
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // VALUES IN ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;
  // CALCULATE ALL VALUES
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / oneSecond);

  // SET VALUES TO ARRAY:
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway is finished!</h4>`;
  }
}
// COUNTDOWN
let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();
