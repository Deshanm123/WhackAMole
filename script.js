const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;

function randomSquare(){
//removing mole function from all of squares
     square.foreach(ClassName => {
         className.classList.remove('mole');
     })
     
//selecting a random square and assigning mole
     let randomPosition = square[ Math.floor(Math.random()*9) ];
     randomPosition.classList.add('mole');
 
    let hitPosition = randomPosition.id;
 }

 // if hit or click with mouse
square.forEach(id => {
     id.addEventListener('mouseup', () => {
         if(id.id === hitposition){
             result+=1;
             score.textContent =result;
         } 
     })
})

function moveMole() {
    
    let timerId = null;
    timerId = setInterval(randomSquare,1000);
}

moveMole();   