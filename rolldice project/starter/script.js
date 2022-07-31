'use strict';

const rollDice=document.querySelector(".btn--roll");
const img=document.querySelector(".dice");
const player0=document.querySelector(".player--0");
const player1=document.querySelector(".player--1");
const sections=document.querySelectorAll(".player");
const totalScore0=document.querySelector("#score--0");
const totalScore1=document.querySelector("#score--1");
const currentScore0=document.querySelector("#current--0");
const currentScore1=document.querySelector("#current--1");
const holdBtn=document.querySelector(".btn--hold");
const newBtn=document.querySelector(".btn--new");
// console.log(newBtn);
// console.log(totalScore0,totalScore1);
// console.log(holdBtn);
// console.log(player0);
let activePlayer,currentTotal,sum1,sum2,currentP0,currentP1;
sum1=0;
sum2=0;
currentP0=0;
currentP1=0;
totalScore0.textContent=0;
totalScore1.textContent=0;
img.src=`http://127.0.0.1:5500/starter/dice-1.png`;


rollDice.addEventListener("click",()=>{
    let randomNumber=Math.floor(Math.random()*6)+1;
    img.src=`http://127.0.0.1:5500/starter/dice-${randomNumber}.png`;

sections.forEach((el)=>{
    if(el.classList.contains("player--active")){
        // console.log(el.classList);
        activePlayer=el;
        // console.log(el);
    }
})
activePlayer.classList.contains("player--0")?currentP0+=randomNumber:currentP1+=randomNumber;
currentScore0.textContent=currentP0;
currentScore1.textContent=currentP1;

if(randomNumber===1){
    sections[0].classList.toggle("player--active");
    sections[1].classList.toggle("player--active");
    activePlayer.classList.contains("player--0")?currentP0=0:currentP1=0;
    currentScore0.textContent=currentP0;
currentScore1.textContent=currentP1;
}



})
holdBtn.addEventListener("click",()=>{
    sum1+=currentP0;sum2+=currentP1;
    activePlayer.classList.contains("player--0")?totalScore0.textContent=sum1:totalScore1.textContent=sum2;
    if(totalScore0.textContent>=100){
        totalScore0.textContent="you won";
        totalScore1.textContent="Betterluck next time";
    }
    if(totalScore1.textContent>=100){
        totalScore1.textContent="you won";
        totalScore0.textContent="Betterluck next time";
    }
    sections[0].classList.toggle("player--active");
    sections[1].classList.toggle("player--active");

    currentP0=0;
    currentP1=0;
    activePlayer.classList.contains("player--0")?currentScore0.textContent=currentP0:currentScore1.textContent=currentP1;
})
newBtn.addEventListener("click",()=>{
    sum1=0;
    sum2=0;
    currentP0=0;
    currentP1=0;
    totalScore0.textContent=0;
    totalScore1.textContent=0;
    img.src=`http://127.0.0.1:5500/starter/dice-1.png`;
    if(!sections[0].classList.contains("player--active")){
        sections[0.].classList.toggle("player--active");
        sections[1].classList.toggle("player--active");

    }
    currentScore0.textContent=0;
    currentScore1.textContent=0;
})











    

