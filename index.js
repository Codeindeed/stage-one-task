let date = document.querySelector(".day").getElementsByTagName("p");
let time = document.querySelector(".time").getElementsByTagName("p");

function updateDay() {
  const day = new Date();
  let today = day.toLocaleDateString("en", { weekday: "long" });
  let days = Date.now();
  date[0].textContent = today;
  time[0].textContent = days;
  console.log(days);
}

setInterval(updateDay, 1000);
