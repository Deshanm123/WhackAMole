const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
//removing mole function from all of squares
     square.forEach(className => {
         //removal of class from html,which results removal of css effects
         className.classList.remove("mole");
     }); 
     
//selecting a random square and assigning mole
//math.random generate value from 0 to 1 inclusive
     let randomPosition = square[Math.floor(Math.random() * 9)];
     randomPosition.classList.add('mole');
 
     hitPosition = randomPosition.id;
    }

 // if hit with mouse on mole gerenerate a scor e 
square.forEach(id => {
     id.addEventListener('click', () => {
         if(id.id === hitPosition){
             result+=1;
             score.textContent = result;
         } 
     });
});

function moveMole() {
    
    let timerId = null;
    timerId = setInterval(randomSquare,710);
}
//reducing time
function countDown(){
    currentTime--;
    timeLeft.textContent=currentTime;
    if (currentTime===0){
        clearInterval(timerId);
    alert(`Game over!!
        you have scored ${result}`);
    }

}
//passing counter Id as 1 sec
let timerId= setInterval(countDown,1000);
randomSquare();
moveMole();   