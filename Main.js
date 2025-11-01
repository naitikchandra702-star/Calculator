const display = document.querySelector('.inputgr');

function addnum(input) {
    display.value += input;
}

function cleardisplay() {
    display.value = '';
}
function displayminus() {
    display.value= display.value.substring(0,display.value.length-1)
}
function displayadd() {
    display.value += 10;
}


function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (Error) {
        
        setTimeout(()=>{display.value=""},700);
        display.value="Expression is wrong"

    }
        
}





//changeAppearance

let container= document.querySelector(".green")

let input= document.querySelector(".inputgr")

let mode= document.querySelector(".mode");

let modecolor="dark";
mode.addEventListener("click",()=>{
  if (modecolor==="dark") {
    modecolor="light";
    container.classList.remove("green")
    container.classList.add("red")
    
    input.classList.remove("inputgr")
    input.classList.add("inputre")
    
  } else {
modecolor="dark";
container.classList.remove("red")
    container.classList.add("green")
    
    input.classList.remove("inputre")
    input.classList.add("inputgr")
  }})
