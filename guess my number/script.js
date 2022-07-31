'use strict';
let randomNumber=Math.floor(Math.random()*20)+1;
 console.log( "random",randomNumber);
// let guessNumber=document.querySelector(".guess").value*1;

//  console.log("guess number", guessNumber);
let score=document.querySelector(".score").innerHTML*1;
let highScore=document.querySelector(".highscore").innerHTML*1;
// console.log(typeof score);
// console.log(score);
document.querySelector(".check").addEventListener("click",(event)=>{
let guessNumber=document.querySelector(".guess").value*1;
console.log(guessNumber,"guess in event");

if(randomNumber===guessNumber){
 document.querySelector("h1").innerHTML="yep!!you got it";
 document.querySelector(".number").innerHTML=randomNumber;
 document.querySelector("body").style.backgroundColor="green";
 if(score>=highScore){
    highScore=score;
    document.querySelector(".highscore").innerHTML=highScore;
 }
    }else{
        if(guessNumber<randomNumber){
        document.querySelector("h1").innerHTML="Too low";
        score--;
        document.querySelector(".score").innerHTML=score;

        console.log(score);
        console.log(typeof score);


        }else{
            document.querySelector("h1").innerHTML="Too high";
            score--;
        document.querySelector(".score").innerHTML=score;


        }
 document.querySelector("body").style.backgroundColor="red";
        
    }
})
document.querySelector(".again").addEventListener("click",()=>{
 document.querySelector("body").style.backgroundColor="#222";
 document.querySelector(".number").innerHTML="?";
 document.querySelector(".guess").value="";
 document.querySelector("h1").innerHTML="Guess My Number!";
 document.querySelector(".score").innerHTML="20";
 randomNumber=Math.floor(Math.random()*20)+1;
 console.log(randomNumber,"again");
 document.querySelector(".highscore").innerHTML=highScore;

})