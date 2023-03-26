// onload === 'ol'

let oltheme = localStorage.getItem("theme");
let olbody = document.getElementById("section");
let notifyss = document.getElementById("notificationsoundeffect");


if(oltheme == "classic")
{
    olbody.style.backgroundColor = "rgb(245,35%,19%)";
}
else{
olbody.setAttribute("style","background-image: url(./theme/"+ oltheme + ".jpg)")
}

let notifonload = localStorage.getItem("notif");
notifyss.innerHTML = `<source src="./notifications/${notifonload}.wav" type="audio/mpeg">`

//checking notification toggle onload
let notiftogg = document.getElementById("notiftoggle");

let notitoggle = localStorage.getItem("notification");
if(notitoggle == "on")
{
    notiftogg.checked = true;
}

//logic for notification toggle on and off
notiftogg.addEventListener("change",function(){
    doSomething();
})
function doSomething() {
  if (notiftogg.checked) {
    console.log('Toggle is checked');
    localStorage.setItem("notification","on")
  } else {
    console.log('Toggle is not checked');
    localStorage.setItem("notification","off")
  }
}