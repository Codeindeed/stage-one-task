let date = document.querySelector(".day").getElementsByTagName("p");
let time = document.querySelector(".time").getElementsByTagName("p");

function updateDay() {
  const day = new Date();
  let today = day.toLocaleDateString("en", { weekday: "long" });
  date[0].textContent = today;
  let hours = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();
  console.log(seconds);
  const meridian = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  time[0].textContent = hours + ":" + minutes + ":" + seconds + meridian;
}

setInterval(updateDay, 1000);
