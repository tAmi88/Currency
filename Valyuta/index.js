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
btnLeft[0].firstElementChild.addEventListener('click',()=>{
    btnLeft[0].firstElementChild.style.background="#833AE0"
    btnLeft[0].firstElementChild.style.color="white"
    btnLeft[0].lastElementChild.style.background="#E5E5E5"
    btnLeft[0].lastElementChild.style.color="black"
})
btnLeft[0].lastElementChild.addEventListener('click',()=>{
    btnLeft[0].lastElementChild.style.background="#833AE0"
    btnLeft[0].lastElementChild.style.color="white"
    btnLeft[0].firstElementChild.style.background="#E5E5E5"
    btnLeft[0].firstElementChild.style.color="black"
})

