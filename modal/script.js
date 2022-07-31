'use strict';

const buttons = document.querySelectorAll(".show-modal");//nodelist which behaves as array but isnt exactly like array 
const closeButton = document.querySelector(".close-modal");
let hiddenDiv = document.querySelector(".modal");
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        
        console.log(hiddenDiv); 
        hiddenDiv.classList.add("show");
        hiddenDiv.classList.remove("hidden");
    })
})

closeButton.addEventListener("click", (event)=>{
    console.log(event);
    
    console.log(hiddenDiv);
    hiddenDiv.classList.add("hidden");
    hiddenDiv.classList.remove("show");

})

//keydown 

window.addEventListener('keydown', (event)=>{
    console.log("event is fired!");
    console.log(event.key);
    if(event.key ===  "Escape"){
        console.log("proceed")
         if(hiddenDiv.classList.contains("show")){
            hiddenDiv.classList.remove("show");
            hiddenDiv.classList.add("hidden");
         }
    }
})
