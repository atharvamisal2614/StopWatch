var tens=00;
var second=00;
var minutes=00;

var appendTens=document.getElementById("tens");

var appendSeconds=document.getElementById("second");

var appendMinutes=document.getElementById("minutes");

var startButton=document.getElementById('start');

var stopButton=document.getElementById('stop');

var resetButton=document.getElementById('reset');

var interval;

startButton.onclick=function(){
    clearInterval(interval);
    interval=setInterval(startTimer,10);
}

stopButton.onclick=function(){
    clearInterval(interval);
}

resetButton.onclick=function(){
    tens=00;
    second=00;
    minutes=00;
    appendTens.innerHTML=tens;
    appendSeconds.innerHTML=second;
    appendMinutes.innerHTML=minutes;
}
function startTimer(){
    tens++;

    if(tens<=9){
        appendTens.innerHTML="0"+tens;
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        second++;
        appendSeconds.innerHTML="0"+second;
        tens=00;
        appendTens.innerHTML="0"+tens;
    }
    if(second>9){
        appendSeconds.innerHTML=second;
    }

    if(second>59){
        minutes++;
        appendMinutes.innerHTML="0"+minutes;
        second=00;
        appendSeconds.innerHTML="0"+second;
    }
    if(minutes>9){
        appendMinutes.innerHTML=minutes;
    }
}
