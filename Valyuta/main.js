let btnLeftMain  = document.querySelectorAll(".left button")
let btnRightMain  = document.querySelectorAll(".right button")
let LeftInp = document.querySelector(".left input")
let RightInp = document.querySelector(".right input")
let paragraphLeft = document.querySelector(".left .price p")
let paragraphRight = document.querySelector(".right .price p")
let btnLeftMainactive=document.querySelector(".left .first")
let btnRightMainactive=document.querySelector(".right .act")
let Allbtn=document.querySelectorAll(".calculate button ")

//Left Button Click
btnLeftMain.forEach(elements=>{
    elements.addEventListener("click",()=>{
    btnLeftMain.forEach(x => x.classList.remove("actived"));
    elements.classList.add("actived");
    base=elements.innerHTML
    })
})

//Right Button Click
btnRightMain.forEach(elements=>{
    elements.addEventListener("click",()=>{
    btnRightMain.forEach(x => x.classList.remove("actived"));
    elements.classList.add("actived");
    symbols=elements.innerHTML
    })  
})

//navbar-phone
let menu = document.querySelector("#navbar-phone")
let menubar = document.querySelector("#navbar-phone  .menu-bar")
menu.addEventListener("click",()=>{
    menu.classList.toggle("active")
    menubar.classList.toggle("active")
})




