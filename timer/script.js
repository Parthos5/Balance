let workTittle = document.getElementById("work");
let breakTittle = document.getElementById("break");
let timersettings = JSON.parse(localStorage.getItem("timer"));
console.log(timersettings[0]); //WORKTIME
let workTime = timersettings[0];
let breakTime = timersettings[1];
let noti = document.getElementById("notificationsoundeffect")
// let workTime = 1;
// let breakTime = 1;

let seconds = "00";

window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;
  workTittle.classList.add("active");
};

function update() {
  timersettings = JSON.parse(localStorage.getItem("timer"));
  console.log(timersettings[0]); //WORKTIME
  workTime = timersettings[0];
  breakTime = timersettings[1];
// let workTime = 1;
// let breakTime = 1;
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;
}
let updatetimer = setInterval(update, 1000);

function start() {
  clearInterval(updatetimer);
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";
  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  let timerFunction = () => {
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;
    seconds = seconds - 1;

    if (seconds == 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes == -1) {
        if (breakCount % 2 == 0) {
          workMinutes = breakMinutes;
          breakCount++;
          workTittle.classList.remove("active");
          breakTittle.classList.add("active");
          noti.play();
        } else {
          workMinutes = workTime;
          breakCount++;
          workTittle.classList.add("active");
          breakTittle.classList.remove("active");
          noti.play();
        }
      }
      seconds = 59;
    }
  };
  setInterval(timerFunction, 1000);
}



// open settings popup
let settingsbtn = document.getElementById("buttone5");
let settings = document.getElementById("settings");
let general = document.getElementById("generaltab");
let timer = document.getElementById("timertab");
let notification = document.getElementById("notificationtab");
let timerset = document.getElementById("timerset");
let generalset = document.getElementById("generalset");
let notificationset = document.getElementById("notificationset"); //initialsing the buttons

function opensettings() {
  settings.style.visibility = "visible";
  settings.classList.toggle("show");
  settings.classList.remove("hide");
  generalset.setAttribute(
    "style",
    `background-color:white;color: rgba(52,55,83,1);`
  );
  general.style.display = "block";
  timer.style.display = "none";
  notification.style.display = "none";
  timerset.setAttribute("style", `background-color:transparent;color: white;`);
  notificationset.setAttribute(
    "style",
    `background-color:transparent;color: white;`
  );
}

// close settings popup
function closesettings() {
  // settings.style.visibility = "hidden";
  settings.classList.remove("show");
  settings.classList.toggle("hide");
  // settings.style.visibility = "hidden";
  setTimeout(function () {
    settings.style.visibility = "hidden";
  }, 700);
}
