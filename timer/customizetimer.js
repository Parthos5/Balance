function showtabinfo(e){
    let general = document.getElementById("generaltab");
    let timer = document.getElementById("timertab");
    let notification = document.getElementById("notificationtab");

    let timerset = document.getElementById("timerset");
    let generalset = document.getElementById("generalset")
    let notificationset = document.getElementById("notificationset"); //initialsing the buttons

    let current = e.id;
    if(current == "generalset")
    {
        //coloring btns white and transparent accordingly
        generalset.setAttribute("style", `background-color:white;color: rgba(52,55,83,1);`);
        timerset.setAttribute("style", `background-color:transparent;color: white;`);
        notificationset.setAttribute("style", `background-color:transparent;color: white;`);

        //displaying and erasing other info accordingly
        general.style.display = "block";
        timer.style.display = "none";
        notification.style.display= "none";
    }
    else if(current == "timerset")
    {
        //initialsing the minutes and seconds
        let worktime = document.getElementById("worktime");
        let breaktime = document.getElementById("breaktime");

        //coloring btns white and transparent accordingly
        timerset.setAttribute("style", `background-color:white;color: rgba(52,55,83,1);`);
        generalset.setAttribute("style", `background-color:transparent;color: white;`);
        notificationset.setAttribute("style", `background-color:transparent;color: white;`);

        //displaying and erasing other info accordingly
        timer.style.display = "block";
        general.style.display = "none";
        notification.style.display= "none";
        setTimeout(function() {
            timer.classList.add("fadedesc")
          }, 700);

        //pushing the updated times into the localstorqage
        document.getElementById("save").addEventListener("click",function(){
            let timerset = [worktime.value,breaktime.value];
            localStorage.setItem("timer",JSON.stringify(timerset));
        })
    }
    else
    {
        //coloring btns white and transparent accordingly
        notificationset.setAttribute("style", `background-color:white;color: rgba(52,55,83,1);`);
        generalset.setAttribute("style", `background-color:transparent;color: white;`);
        timerset.setAttribute("style", `background-color:transparent;color: white;`);

        //displaying and erasing other info accordingly
        timer.style.display = "none";
        general.style.display = "none";
        notification.style.display= "block";
    }
}