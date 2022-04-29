let base = "RUB";
let symbols = "USD";
let btnLeft = document.querySelectorAll(".value-buttons-left button");
let btnRight = document.querySelectorAll(".value-buttons-right button");
let inpLeft = document.querySelector(".inp-left");
let inpRight = document.querySelector(".inp-right");
let pLeft = document.querySelector(".p-left");
let pRight = document.querySelector(".p-right");
let url = "https://api.exchangerate.host/latest?";
inpLeft.value = 1;
FechRight(base, symbols)
function Style() {
  btnLeft.forEach((item) => {
    item.addEventListener("click", function () {
      btnLeft.forEach((item) => {
        item.classList.remove("actived");
      });
      base = this.innerHTML;
      Api(this.parentElement.classList[0]);
    });
    item.addEventListener("click", () => {
      item.classList.add("actived");
    });
  });
  btnRight.forEach((item) => {
    item.addEventListener("click", function () {
      btnRight.forEach((item) => {
        item.classList.remove("actived");
      });
      symbols = this.innerHTML;
      Api(this.parentElement.classList[0]);
    });
    item.addEventListener("click", () => {
      item.classList.add("actived");
    });
  });
}
function inpEvent() {
  inpLeft.addEventListener("input", () => {
    if (inpLeft.value == "") {
      inpRight.value = "";
      pLeft.innerHTML = "";
      pRight.innerHTML = "";
    } else {
      FechRight(base, symbols);
    }
  });
  inpRight.addEventListener("input", () => {
    if (inpRight.value == "") {
      inpLeft.value = "";
      pLeft.innerHTML = "";
      pRight.innerHTML = "";
    } else {
      FechLeft(base, symbols);
    }
  });
}
function Api(btn_parent_name) {
  if (btn_parent_name == "value-buttons-right") {
    FechRight(base, symbols);
  }
  if (btn_parent_name == "value-buttons-left") {
    FechLeft(base, symbols);
  }
}
function FechLeft(baseFunc, symbolsFunc) {
  if (baseFunc != symbolsFunc) {
    fetch(`${url}base=${symbolsFunc}&symbols=${baseFunc}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        inpLeft.value =
          inpRight.value.replace(/\s+/g, "") * data.rates[`${baseFunc}`];
        Imask(inpLeft);
        pRight.innerHTML = `1${data.base}=${
          data.rates[`${baseFunc}`]
        }${baseFunc}`;
        fetch(`${url}base=${baseFunc}&symbols=${symbolsFunc}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            pLeft.innerHTML = `1${data.base}=${
              data.rates[`${symbolsFunc}`]
            }${symbolsFunc}`;
          });
      });
  } else {
    inpLeft.value = inpRight.value;
    pLeft.innerHTML = `1${baseFunc}=1${baseFunc}`;
    pRight.innerHTML = `1${baseFunc}=1${baseFunc}`;
  }
}
function FechRight(baseFunc, symbolsFunc) {
  if (baseFunc != symbolsFunc) {
    fetch(`${url}base=${baseFunc}&symbols=${symbolsFunc}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        inpRight.value =
          inpLeft.value.replace(/\s+/g, "") * data.rates[`${symbolsFunc}`];
        Imask(inpRight);
        pLeft.innerHTML = `1${data.base}=${
          data.rates[`${symbolsFunc}`]
        }${symbolsFunc}`;
        fetch(`${url}base=${symbolsFunc}&symbols=${baseFunc}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            pRight.innerHTML = `1${data.base}=${
              data.rates[`${baseFunc}`]
            }${baseFunc}`;
          });
      });
  } else {
    inpRight.value = inpLeft.value;
    pLeft.innerHTML = `1${baseFunc}=1${baseFunc}`;
    pRight.innerHTML = pLeft.innerHTML;
  }
}
function Imask(inp) {
  var numberMask = IMask(inp, {
    mask: Number,
    scale: 6,
    signed: false,
    thousandsSeparator: " ",
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: ".",
    mapToRadix: [","],
  });
}
Imask(inpLeft);
Imask(inpLeft);
Style();
inpEvent();
