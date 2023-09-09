let date = document.querySelector(".day").getElementsByTagName("p");
let time = document.querySelector(".time").getElementsByTagName("p");
let day = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[day.getDay()];
date[0].textContent = today;

let hours = day.getHours();
let minutes = day.getMinutes();
let seconds = day.getSeconds();

let meridian = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? "0" + minutes : minutes;
time[0].textContent = hours + ":" + minutes + " " + meridian;
