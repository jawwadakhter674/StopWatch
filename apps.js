var min=0;
var sec=0;
var msec=0;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;
function time(){
msec++;
msecHeading.innerHTML=msec;
if(msec >= 100){
    msec=0;
    sec++;
    secHeading.innerHTML=sec;
}
else if(sec>=60){
sec=0;
min++;
minHeading.innerHTML=min;
} 


}
function start(){
interval=setInterval(time,10)
var strt=document.getElementById('none');
none.style.pointerEvents=('none');



}
function stop(){
    clearInterval(interval);
    var strt=document.getElementById('none');
none.style.pointerEvents=('visible');

   
}
function reset(){
    sec=0;
    min=0; 
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec
    stop();
}