// Your code goes here

//mouseover
const imgCont = document.querySelector('.img-content');
console.log(imgCont);
imgCont.addEventListener('mouseover', () => {
    imgCont.style.transform = "scale(1.2)"
    imgCont.style.transition = "all 0.6s"
});



//keydown
const body1 = document.querySelector("body")
body1.addEventListener("keydown", () => {
    body1.style.backgroundColor = "purple";
})


//keyup
window.addEventListener("keyup", () => {
    body1.textContent = "Don't miss your FunBus!"
    body1.style.backgroundColor = "pink";
    body1.style.fontSize = "6rem";
});

//click
const contentSection = document.querySelector(".logo-heading");
contentSection.addEventListener("click", () => {
    contentSection.style.color = 'red';
    contentSection.style.background = 'green';
});

//wheel
document.querySelector(".nav").addEventListener("wheel",function(){
    this.style.width = "140vw";
});


//scroll
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if(Math.ceil(scrolled) === scrollable){
        alert('You\'ve reached the bottom!');
    }
});

//resize
var textColor = document.querySelector("h2");
window.addEventListener('resize', () => {
    textColor.style.color = "red";
})

//dblclick
const navStyle = document.querySelectorAll(".nav-link").forEach (item => {
    item.addEventListener("dblclick", () => {
        item.style.color = "red";
    })
});

//stopPropagation
window.onload = function (){
    const logo = document.querySelector('h1');
    logo.addEventListener("click", (event) => {
        logo.style.transform = "rotatex(360eg)";
        logo.style.transition = "3s";
        event.stopPropagation();
    });

}
//dragstart
document.querySelector("body").addEventListener("dragstart", function(){
    alert('YOU CAN DRAG THIS!!')
    this.style.color = "orange"
});

//load
let loadEvent = document.querySelector('p');
window.addEventListener('load', () => {
    loadEvent.style.color = "lime";
});

//copy
document.querySelector("body").addEventListener("copy",function(){
    alert("DON'T TRY TO COPT THE DATA ,IT WILL BE ERASED")
    this.style.display = "none";
});
