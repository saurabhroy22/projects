let button=document.querySelector("button");
// console.log(button);
let body=document.body;
// console.log(body);
let currentColor=document.querySelector(".color");
// console.log(currentColor);
function colorGenerator(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let randomColor=`rgb(${red},${green},${blue})`
    return randomColor;
}

button.addEventListener("click",()=>{
    // body.style.backgroundColor="green"
    let randomColor=colorGenerator();
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
    // console.log(randomColor);
})