let twelve = true;
const twelve_Button= document.querySelector('.twelve');
const twentyfour_Button = document.querySelector('.twentyfour');
twelve_Button.addEventListener('click',()=>{twelve=true;clock12();});
twentyfour_Button.addEventListener('click',()=>{twelve=false;clock24();});
clock12();
function clock12(){
function clock(){
    document.getElementById('hour').innerHTML = "";
    document.getElementById('minute').innerHTML ="";
    document.getElementById('second').innerHTML ="";
    function myStopFunction() {
        clearInterval(idVar);
    }
    if (twelve ===false){
        myStopFunction();
    }
    
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();

    if(hours<10 && hours!==0){
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
        // if(hours>12&&hours<13){
        //     seconds = seconds +" pm"
        //     hours = "12";
        // }
        seconds= seconds +" pm";
        if(hours<10){hours= "0"+hours;}
        
    }
    else{
        seconds= seconds +" am";
    }
    if(hours ===0){
        hours=hours +12;
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + minutes;
    document.getElementById('second').innerHTML = ":" + seconds;
}
if(twelve === false){
    clearInterval(idVar);
}
var idVar = setInterval(clock, 1000);

}
function clock24(){
    function clock(){
        document.getElementById('hour').innerHTML = "";
        document.getElementById('minute').innerHTML ="";
        document.getElementById('second').innerHTML ="";
        function myStopFunction() {
            clearInterval(idVar);
        }
        if(twelve ===true){
            myStopFunction();
        }
        
        const fullDate = new Date();
        let hours = fullDate.getHours();
        let minutes = fullDate.getMinutes();
        let seconds = fullDate.getSeconds();

        if(hours<10){
            hours = '0'+hours;
        }
        if(minutes<10){
            minutes = '0'+minutes;
        }
        if(seconds<10){
            seconds = '0'+seconds;
        }

        document.getElementById('hour').innerHTML = hours;
        document.getElementById('minute').innerHTML = ":" + minutes;
        document.getElementById('second').innerHTML = ":" + seconds;

    }
    var idVar= setInterval(clock,1000);

}
console.log("hello");
