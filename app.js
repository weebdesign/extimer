"use strict"
//globel veriable
let timeLeft;
let timerInterval;
let isRunning=false;
let displayredColor;

const timerDisplay=document.getElementById('timer');
const startBtn=document.getElementById('startBtn');




const startTimer=(duration)=>{
    let timer =duration;
   timerInterval= setInterval(()=>{
    const minute=parseInt(timer/60,10);
    const secound=parseInt(timer % 60,10);

    const displayMinute= minute < 10? "0"+ minute:minute;
    const displaySecond= secound < 10? "0"+ secound : secound;
   
    // change color
   
    function changeOrage(){
        secound < 11 ? timerDisplay.style.color="yellow": secound;
      
        secound == 20 ?  playAudio(): secound;
        secound == 10?  playAudio(): secound;
        secound == 0 ?  playAudio(): secound;
       
        
    }
    function changeRed(){
       
        //  secound > 6 ? timerDisplay.style.color="black ": secound;
        //  secound > 11 ? timerDisplay.style.color="black ": secound;

    }
          secound > 11 ? timerDisplay.style.color="black ": secound;
        //   secound > 11 ? playAudio(): secound;

    timerDisplay.style.color=changeOrage();
    timerDisplay.style.color=changeRed();
    //  secound > 6 ? timerDisplay.style.color="black ": secound;

    //  secound < 11 ? timerDisplay.style.color="orange ": secound;
    //  secound > 11 ? timerDisplay.style.color="black ": secound;

    timerDisplay.textContent=displayMinute+':'+displaySecond;
    if(--timer <0){
       
        clearInterval(timerInterval);
        timerDisplay.textContent='Breath Out'
        setTimeout(() => {
            startTimer(timeLeft);
            playAudioTwo()
             timerDisplay.textContent='Breath In'
            
        },5000);
    }


  


   },1000);

}   

// console.log('hellow')


const stopTimer =()=>{
    clearInterval(timerInterval);
    timerDisplay.textContent='Breat In'
    isRunning=false;

}



// Click button

const stopBtn=document.getElementById('stopBtn');
startBtn.addEventListener("click",function(){
   if(!isRunning){
    timeLeft=30;
    startTimer(timeLeft);
   }
   isRunning=true;
});

stopBtn.addEventListener("click",function(){
    stopTimer();
    isRunning=false;
  
});
const audio=document.getElementById('audio');
const audioTwo=document.getElementById('audioTwo');

function playAudio(){
    audio.play()
}

function playAudioTwo(){
    audioTwo.play()
}


