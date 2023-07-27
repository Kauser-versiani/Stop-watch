let resetButton = document.getElementById("reset");
let playButton = document.getElementById("play");
let lapButton = document.getElementById("lap");
let minHead = document.getElementById("min");
let secHead = document.getElementById("sec");
let msecHead = document.getElementById("msec");
let laps = document.getElementById("laps");
let clearButton = document.getElementById("clear-all");
let bg = document.getElementById("outer-circle");
let min = 0;
let sec = 0;
let msec = 0;
let lapItem = 1 ;
let counter;
let isPlay = false;
function none(){
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}
function block(){
    function none(){
        lapButton.classList.remove("hidden");
        resetButton.classList.remove("hidden");
    }
    lapButton.classList.toggle("hidden");
    resetButton.classList.toggle("hidden");
}
let play;
 function playing() {
 if (!isPlay) {
    playButton.innerHTML = "pause";
    bg.classList.add("animation-bg");
    function playMiliSec() {
        msec++;
        msecHead.innerHTML = msec;
        if (msec === 100) {
            sec++;
            secHead.innerHTML = `&nbsp;${sec} : `;
            msec = 0;
        }
        else if (sec >= 60){
            min++;
            minHead.innerHTML = `&nbsp;${min} : `;
            sec = 0;
        }
    }
    counter = setInterval(playMiliSec,10);
    isPlay = true;
}
else{
    playButton.innerHTML = "play";
    clearInterval(counter);
    isPlay = false;
    bg.classList.remove("animation-bg");
}
block();
}
function reset() {
    playing() ;
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    minHead.innerHTML = "0 : ";
    secHead.innerHTML =  "0 : ";
    msecHead.innerHTML = "0";
    clearInterval(counter);
}

function lap() {
    let li = document.createElement("li");
    let number = document.createElement("span");
    let timeStamp = document.createElement("span");
    li.setAttribute("class","lap-item");
    number.setAttribute("class","number");
    timeStamp.setAttribute("class","lap-stamp");
    number.innerText = `#${lapItem++}`;
    timeStamp.innerHTML = `${min} : ${sec} : ${msec}`;
    li.append(number,timeStamp);
    laps.append(li);
    clearButton.classList.remove("hidden");

}
function clearBtn() {
    laps.innerHTML = "";
    laps.append(clearButton);
    clearButton.classList.add("hidden");
}







