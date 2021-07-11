const Clock=document.body.querySelector("#clock");


function GetTime(){
    const date=new Date();
    const Hours=String(date.getHours()).padStart(2,"0");
    const Minutes=String(date.getMinutes()).padStart(2,"0");
    const Seconds=String(date.getSeconds()).padStart(2,"0");
    Clock.innerText=`${Hours}:${Minutes}:${Seconds}`;
    }
    
GetTime();
setInterval(GetTime,1000);