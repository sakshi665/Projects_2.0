const timerInput=document.querySelector(".timer_inputs");
const btns = document.querySelector(".container_btn");

timerInput.addEventListener("input",handleInput);
btns.addEventListener("click",handleClick);

let hrs,min,sec;
let timeLeftInSecs;
let timerId;

function handleInput(e){
    const inputEle=e.target;
    const inputType=inputEle.getAttribute("id");
  
    console.log(inputEle.value);
    if(inputEle.value<0){
        alert("Please add a positive value");
        inputEle.value="00";
    }

    switch (inputType) {
      case "hr":
        hrs = inputEle.value.slice(0, 2);
        inputEle.value = hrs;
        break;
      case "min":
        min = inputEle.value.slice(0, 2);
        inputEle.value = min;
        break;
      case "sec":
            sec = inputEle.value.slice(0, 2);
        inputEle.value = sec;
        break; 
    }
}

function handleClick(e){
    let btntype=e.target.getAttribute("id");
    switch(btntype) {
      case "start":
        handleStart()
        break;
      case "pause":
        handlePause()
        break;
      case "continue":
        handleContinue()
        break;
      case "reset":
        handleReset();
        break;
    }
}

function handleStart(){
    //1:34:45 --->into seconds--setInterval -->1sec we deduct 1 sec from a total number of seconds
    //we display the left second

    let totalTimeInSecs=(hrs ? hrs*3600 : 0)+(min? min*60: 0)+(sec?sec*1:0);
    console.log(totalTimeInSecs);
    startTimer(totalTimeInSecs);
}

function startTimer(totalTimeInSecs){
    if(totalTimeInSecs==0) return;

    display(totalTimeInSecs);

     timerId=setInterval(()=>{
     timeLeftInSecs =--totalTimeInSecs;
     display(timeLeftInSecs);
     if(timeLeftInSecs==0){
        alert("time completed");
        clearInterval(timerId);
     }
    },1000)
}

function display( timeInSecs){
    //parseInt not give the decimal point
let hrs=parseInt(timeInSecs/3600);
timeInSecs=timeInSecs%3600;
let mins=parseInt(timeInSecs/60);
let secs=timeInSecs%60;
//here we can see timer decrease on console but we want in place holder
console.log(hrs,mins,secs);

//for placeholder we can see next....
Array.from(timerInput.children).forEach(ele=>{
    let eleType=ele.getAttribute("id");
    if(eleType=="hr") ele.value=hrs>9?hrs:"0"+hrs
    else if(eleType=="min") ele.value=mins>9?mins:"0"+mins
    else if(eleType=="sec") ele.value=secs>9?secs:"0"+secs
})
}

function handlePause(){
    clearInterval(timerId);
}

function handleContinue(){
  startTimer(timeLeftInSecs);
}

function handleReset(){
    clearInterval(timerId);
    Array.from(timerInput.children).forEach(ele=>{
        ele.value="00"
    })
    timeLeftInSecs=0;
}