//adding the close sidebar button js

let sidebar = document.getElementById("sidebar");
let navbar = document.getElementById("navbartask");
// let text = document.querySelector('.text'); this all elements in productivity of p tag
let user = document.getElementById("user");
let group = document.getElementById("group");
let content = document.getElementById("productivity");
let floats = document.querySelector(".floatingnavbar");
let floatsid = document.getElementById("floatingnavbar");
let hamburger = document.getElementById("hamburger");
let rightarrow = document.getElementById("rightarrow");
let todolist = document.getElementById("todolist");

let sidebarctr = 0; //
console.log(floats);
function closesidebar() {
  // text.style.visibility = "hidden";
  sidebar.style.width = "0vw";
  navbar.style.width = "100vw";
  user.style.display = "none";
  group.style.display = "none";
  content.style.display = "none";
  floats.classList.remove("float");
  floats.classList.add("appear");
  rightarrow.style.display = "block";
  todolist.style.width = "92vw";
  sidebarctr = 1;
}

//opening sidebar again on clicking right arrow
function opensidebar() {
  user.style.display = "flex";
  group.style.display = "flex";
  sidebar.style.width = "14vw";
  navbar.style.width = "86vw";
  content.style.display = "block";
  floats.classList.add("float");
  floats.classList.remove("appear");
  rightarrow.style.display = "none";
  todolist.style.width = "78vw";
  sidebarctr = 0;
}

//checking if mouse is over to the left section
document.addEventListener("mousemove", function (event) {
  var mouseX = event.clientX;
  var windowWidth = window.innerWidth;
  var isHoveringLeftSection = mouseX < windowWidth / 7.8;

  if (isHoveringLeftSection) {
    //   console.log("Mouse is hovering over the left section of the screen.");
    floatsid.style.marginLeft = "0px";
    if (sidebarctr === 1) {
      hamburger.style.display = "none";
      rightarrow.style.display = "block";
    }
  } else {
    //   console.log("Mouse is NOT hovering over the left section of the screen.");
    floatsid.style.marginLeft = "-25vw";
    if (sidebarctr === 1) {
      hamburger.style.display = "block";
      rightarrow.style.display = "none"; //changing hamburger to right arrow on hover and back
    }
  }
});

//TO DO LIST JS

//adding a task feature
let addcontainer = document.getElementById("addcontainer");
let addtaskbtn = document.getElementById("addtask");
let finalpriority;
addtaskbtn.addEventListener("click",function(){
  addcontainer.style.display = "block";
  addtaskbtn.style.display = "none";
})

//select priority part
priorityctr = 0;
let options = document.getElementById("options");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");

function priority(e) {
  let selectedpr = e.querySelector("p").innerHTML;
  finalpriority = selectedpr; //priority is stored here for use in other functions
  // let p1 = document.getElementById("p1");
  // let p2 = document.getElementById("p2");
  // let p3 = document.getElementById("p3");
  // let p4 = document.getElementById("p4");

  console.log(selectedpr);
  let cid = e.id;
  let idcid = document.getElementById(cid);
  console.log(idcid);

  if(cid == "p1")
  {
    p1.style.backgroundColor = "#47da99"
    p2.style.backgroundColor = "whitesmoke"
    p3.style.backgroundColor = "whitesmoke"
    p4.style.backgroundColor = "whitesmoke"
    priorityctr = 1;
  }
  else if(cid == "p2")
  {
    p1.style.backgroundColor = "whitesmoke"
    p2.style.backgroundColor = "#47da99"
    p3.style.backgroundColor = "whitesmoke"
    p4.style.backgroundColor = "whitesmoke"
    priorityctr = 1;
  }
  else if(cid == "p3")
  {
    p1.style.backgroundColor = "whitesmoke"
    p2.style.backgroundColor = "whitesmoke"
    p3.style.backgroundColor = "#47da99"
    p4.style.backgroundColor = "whitesmoke"
    priorityctr = 1;
  }
  else if(cid == "p4")
  {
    p1.style.backgroundColor = "whitesmoke"
    p2.style.backgroundColor = "whitesmoke"
    p3.style.backgroundColor = "whitesmoke"
    p4.style.backgroundColor = "#47da99"
    priorityctr = 1;
  }
}

//cancel adding the task
let cancel = document.getElementById("cancel");
cancel.addEventListener("click",function(){
  addcontainer.style.display = "none";
  addtaskbtn.style.display = "flex"
})

//add the task to the database and page
let addthetask = document.getElementById("addthetask");
let taskinput = document.getElementById("entertask");
let dateinput = document.getElementById("dateaddtask");
let todos = document.getElementById("todos");

let originalColor = document.getElementById("p1").style.backgroundColor;

//final step of clicking add the task button
addthetask.addEventListener("click",function(){
  console.log(priorityctr);
  console.log(taskinput.value);
  console.log(dateinput.value);
  if(priorityctr === 0) //making sure a priority is selected
  {
    console.log("select a priority");
    document.getElementById("p1").style.backgroundColor = "#47da99"; //making bg colors of these cotnainers green
    document.getElementById("p2").style.backgroundColor = "#47da99";
    document.getElementById("p3").style.backgroundColor = "#47da99";
    document.getElementById("p4").style.backgroundColor = "#47da99";
    console.log("add a task name");
    setTimeout(() => {
      // Reset the color to the original color
      document.getElementById("p1").style.backgroundColor = originalColor;
      document.getElementById("p2").style.backgroundColor = originalColor;
      document.getElementById("p3").style.backgroundColor = originalColor;
      document.getElementById("p4").style.backgroundColor = originalColor;
    }, 500);
  }
  if(taskinput.value == "") //making sure a task is entered
  {
    taskinput.style.boxShadow = "0 3px 12px 0 rgba(0,0,0,0.37)";
    setTimeout(() => {
      // Reset the color to the original color
      taskinput.style.boxShadow = "none"
    }, 500);
  }
  if(dateinput.value == "") //making sure a date is entered
  {
    console.log("add a date")
    dateinput.style.backgroundColor = "#e8847b"
    setTimeout(() => {
      // Reset the color to the original color
      dateinput.style.backgroundColor = "whitesmoke"
    }, 500);
  }

  // case of when every input field is chosen and task is added
  if(taskinput.value != "" && dateinput.value != "" && priorityctr === 1)
  {
    let formatteddate = convertdate(dateinput.value); //retreiving correct format of date
    //retreiving priority
    let img;
    if(finalpriority == "Priority 1")
    {
     img  = `<img src="../icons/red-flag.png" id="flag" alt="">`
    }
    else if(finalpriority == "Priority 2")
    {
     img  = `<img src="../icons/yellow-flag.png" id="flag" alt="">`
    }
    else if(finalpriority == "Priority 3")
    {
     img  = `<img src="../icons/blue-flag.png" id="flag" alt="">`
    }
    else{      
     img  = `<img src="../icons/grey-flag.png" id="flag" alt="">`
    }
    console.log(finalpriority);
    todos.innerHTML += `<div class="element">
    <label class="containercheck">
        <input type="checkbox">
        <div class="checkmark"></div>
    </label>
    <p id="mytask">${taskinput.value}</p>
    ${img}
    <p>${formatteddate}</p>
</div>`
    addcontainer.style.display = "none";
    addtaskbtn.style.display = "flex";
    taskinput.value = "";
    dateinput.value = "";
    p1.style.backgroundColor = "whitesmoke"
    p2.style.backgroundColor = "whitesmoke"
    p3.style.backgroundColor = "whitesmoke"
    p4.style.backgroundColor = "whitesmoke"
  }
})

//DELETE TASK

//displaying 3 dots once element is hovered over
function dots(e)
{
  // console.log(e.getElementById("more"))
  // let selectedpr = e.querySelector("p").innerHTML;
  let dotsid  = e.querySelector(".more");

  // let mydots = document.getElementById(dotsid);
  dotsid.style.visibility = "visible"
}

function removedots(e)
{
  let dotsid  = e.querySelector(".more");
  dotsid.style.visibility = "hidden"
}

//converting format of date to dd-mm-yyyy
function convertdate(date)
{
// split the date string into an array
const dateArray = date.split('-');

// rearrange the values in the array to the desired format
const formattedDate = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];

console.log(formattedDate); // prints day-month-year format of the date
return formattedDate;
}


//RENDERING TASKS ON FETCHING FROM DB STARTS
//RENDERINF TAKS ON FETHCING FROM DB ENDS