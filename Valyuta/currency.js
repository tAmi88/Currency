let base = "RUB";
let symbols = "USD";
let btnLeft = document.querySelectorAll(".value-buttons-left button");
let btnRight = document.querySelectorAll(".value-buttons-right button");
let inpLeft = document.querySelector(".inp-left");
let inpRight = document.querySelector(".inp-right");
let pLeft=document.querySelector(".p-left")
let pRight=document.querySelector(".p-right")
function Style() {
  btnLeft.forEach((item) => {
    item.addEventListener("click", () => {
      base = item.innerHTML;
      btnLeft.forEach((item) => {
        item.classList.remove("actived");
      });
    });
    item.addEventListener("click", () => {
      item.classList.add("actived");
    });
  });
  btnRight.forEach((item) => {
    item.addEventListener("click", () => {
      symbols = item.innerHTML;
      btnRight.forEach((item) => {
        item.classList.remove("actived");
      });
    });
    item.addEventListener("click", () => {
      item.classList.add("actived");
    });
  });
}
Style();
document.addEventListener("keyup", (e) => {
  if (e.target == inpRight) {
    btnLeft.forEach((item) => {
      item.addEventListener("click", () => {
        base = item.innerHTML;
        FechLeft(base, symbols);
      });
    });
  } 
  else {
    btnRight.forEach((item) => {
      item.addEventListener("click", () => {
        symbols = item.innerHTML;
        FechRight(base, symbols);
      });
    });
  }
  Style();
});

function FechLeft(baseFunc, symbolsFunc) {
  if (baseFunc != symbolsFunc) {
    FechLeftText(baseFunc,symbolsFunc)
  }
}
function FechRight(baseFunc, symbolsFunc) {
  if (baseFunc != symbolsFunc) {
    FechRightText(baseFunc, symbolsFunc)
  }
}

function FechLeftText(baseFunc,symbolsFunc){
  fetch(
    `https://api.exchangerate.host/latest?base=${symbolsFunc}&symbols=${baseFunc}`
  )
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    inpLeft.value = inpRight.value * data.rates[`${baseFunc}`];
    pRight.innerHTML=`1${data.base}=${data.rates[`${baseFunc}`]}${baseFunc}`
    fetch(
      `https://api.exchangerate.host/latest?base=${baseFunc}&symbols=${symbolsFunc}`
    )
    .then((res) => {
      return res.json();
    })
    .then((data)=>{
      pLeft.innerHTML=`1${data.base}=${data.rates[`${symbolsFunc}`]}${symbolsFunc}`
    })
  });
}
function FechRightText(baseFunc, symbolsFunc){
  fetch(
    `https://api.exchangerate.host/latest?base=${baseFunc}&symbols=${symbolsFunc}`
  )
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    inpRight.value = inpLeft.value * data.rates[`${symbolsFunc}`];
    pLeft.innerHTML=`1${data.base}=${data.rates[`${symbolsFunc}`]}${symbolsFunc}`
    fetch(
      `https://api.exchangerate.host/latest?base=${symbolsFunc}&symbols=${baseFunc}`
    )
    .then((res) => {
      return res.json();
    })
    .then((data)=>{
      pRight.innerHTML=`1${data.base}=${data.rates[`${baseFunc}`]}${baseFunc}`
    })
  });
}
