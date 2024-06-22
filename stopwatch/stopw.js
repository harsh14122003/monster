// let timedisplay = document.querySelector('.timedisplay');
// let stopbtn = document.getElementById('stopbtn');
// let startbtn = document.getElementById('startbtn');
// let resetbtn = document.getElementById('resetbtn');

// let msec =00;
// let secs =00;
// let mins =00;

// let timerid = null;

// startbtn.addEventListener('click', function () {

//     if (timerid !== null) {
//         clearInterval(timerid)
//     }

//     timerid = setInterval(starttimer, 10);
// });

// stopbtn.addEventListener('click', function () {
//     clearInterval(timerid);
// });

// resetbtn.addEventListener('click', function () {
//     clearInterval(timerid);
//     timedisplay.innerHTML = '00 : 00 : 00';
// });

// function starttimer() {

//     msec++;
//     if (msec == 100) {
//         msec = 0;
//         secs++;
//         if (secs == 60) {
//             secs = 0;
//             mins++;

//         }
//     }
//     let msecstring = msec < 10 ? `0${msec}` : msec;
//     let secsstring = secs < 10 ? `0${secs}` : secs;
//     let minsstring = mins < 10 ? `0${mins}` : mins;

//     timedisplay.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}`;
// }

let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');


let Hour = 0;
let Minute = 0;
let Secound = 0;
let timer = false;


startbtn.addEventListener("click", function(){
    timer = true;
    StopWatch();
})

stopbtn.addEventListener("click",function(){
    timer = false;
})

resetbtn.addEventListener("click", function(){
    timer = false;
    Hour = 0;
    Minute = 0;
    Secound = 0;
    Update()
    
})


function Update()
{
    document.getElementById('hr').innerHTML = Hour < 10 ? "0" + Hour : Hour;
    document.getElementById('min').innerHTML = Minute < 10 ? "0" + Minute : Minute;
    document.getElementById('sec').innerHTML = Secound < 10 ? "0" + Secound : Secound;      
}

function StopWatch() 
{
    if(timer)
        {
            Secound++;
        }
        if(Secound == 60)
            {
                Minute++;
                Secound = 0;
            }
            if(Minute == 60)
                {
                    Hour++;
                    Minute = 0
                }     
                Update()
                setTimeout(StopWatch,10) 
}
