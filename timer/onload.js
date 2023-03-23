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