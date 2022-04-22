// fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD ')
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// btnLeft=document.querySelectorAll('.value-buttons-left button')

// btnLeft.forEach((item,index)=>{
//         item.addEventListener('click',(e)=>{
//         e.target.style.background='#833AE0'
//         e.target.style.color='white'
//         console.log(e.target)
//         console.log(index)
//     })
// })
btnLeft=document.querySelectorAll('.value-buttons-left')
btnLeft1=document.querySelector('.value-buttons-left')
function last_btn(){
    btnLeft[0].lastElementChild.style.background="#E5E5E5"
    btnLeft[0].lastElementChild.style.color="black"
}
function first_btn(){
    btnLeft[0].firstElementChild.style.background="#E5E5E5"
    btnLeft[0].firstElementChild.style.color="black"
}
console.log(btnLeft1.children[2])
btnLeft1.children[2].style.background="black"
btnLeft.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        if(e.target==btnLeft[0].firstElementChild){
            e.target.style.background='#833AE0'
            e.target.style.color='white'
            // for(i=0;i<) duzelis etmek
        }
        else if(e.target==btnLeft[0].lastElementChild){
            e.target.style.background='#833AE0'
            e.target.style.color='white'
            first_btn()
        }
        else if(e.target!=btnLeft[0].lastElementChild || e.target==btnLeft[0].firstElementChild){
            e.target.style.background='#833AE0'
            e.target.style.color='white'
            first_btn()
            last_btn()
        }
    })
})
