let base = "RUB";
let symbols = "USD";
let btnLeft = document.querySelectorAll(".value-buttons-left button");
let btnRight = document.querySelectorAll(".value-buttons-right button");
inpLeft = document.querySelector(".inp-left");
inpRight = document.querySelector(".inp-right");
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
  } else {
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
    fetch(
      `https://api.exchangerate.host/latest?base=${symbolsFunc}&symbols=${baseFunc}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        inpLeft.value = inpRight.value * data.rates[`${baseFunc}`];
      });
  }
}
function FechRight(baseFunc, symbolsFunc) {
  if (baseFunc != symbolsFunc) {
    fetch(
      `https://api.exchangerate.host/latest?base=${baseFunc}&symbols=${symbolsFunc}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        inpRight.value = inpLeft.value * data.rates[`${symbolsFunc}`];
      });
  }
}
