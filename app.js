var stoplight = document.getElementById("stoplight");
var readylight = document.getElementById("readylight");
var golight = document.getElementById("golight");

function btn1(){
    stoplight.style.backgroundColor = "rgb(222, 10, 10)";  
    readylight.style.backgroundColor = "lightgoldenrodyellow";
    golight.style.backgroundColor = "lightgoldenrodyellow";
}

function btn2(){
    readylight.style.backgroundColor = "yellow"; 
    stoplight.style.backgroundColor = "lightgoldenrodyellow";
    golight.style.backgroundColor = "lightgoldenrodyellow";
}

function btn3(){
    golight.style.backgroundColor = "green";  
    stoplight.style.backgroundColor = "lightgoldenrodyellow";  
    readylight.style.backgroundColor = "lightgoldenrodyellow";
}