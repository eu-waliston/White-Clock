let increment = 30;

for(let i = 0; i <= 11; i++) {
  let w = i * increment;
  let hours = document.querySelectorAll(".hours");
  let s = (hours[i].style.transform = "rotate(" + w + "deg)");
}

let timing = setInterval(time, 1000);

function time() {
  let arms = document.querySelectorAll(".arms");
  let date = new Date();
  let hours = date.getHours() * 30;
  let min = date.getMinutes() * 6;
  let sec = date.getSeconds() * 6;

  arms[0].style.transform = "rotateZ(" + hours +"deg)";
  arms[1].style.transform = "rotateZ(" + min +"deg)";
  arms[2].style.transform = "rotateZ(" + sec +"deg)"
}