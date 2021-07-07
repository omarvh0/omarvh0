'use strict'
class Clock {
constructor(){
  
  setInterval(()=>{
  this.Thetime()
},1000)


}


Thetime (){
var date = new Date(),
 hrs = date.getHours(),
 hrs = (hrs > 12) ? (hrs-12): (hrs=hrs),
 min = addZero(date.getMinutes()),
 sec = addZero(date.getSeconds()),
 ampm = (hrs < 12) ? 'am':'pm',
 msg= hrs +":"+ min+":" + sec + ampm
 function addZero(num){
   return (num < 10) ? ('0' + num) : num 
 }
 
 console.log(msg)
}




}
module.exports = Clock ;
