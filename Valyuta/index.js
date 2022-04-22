fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD ')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})