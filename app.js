
function clock(){
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();

    if(hours<10){
        hours = '0'+hours;
    }
    
    if(minutes<10){
        minutes = '0'+minutes;
    }
    if(seconds<10){
        seconds = '0'+seconds;
    }
    if(hours>12){
        hours=hours-12;
        seconds= seconds +" pm";
        if(hours<10){hours= "0"+hours;}
        
    }
    else{
        seconds= seconds +" am";
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + minutes;
    document.getElementById('second').innerHTML = ":" + seconds;

}
setInterval(clock, 1000);