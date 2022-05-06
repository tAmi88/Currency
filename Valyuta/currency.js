let base = "RUB";
let symbols = "USD";
let btnLeft = document.querySelectorAll(".left-currency button");
let btnRight = document.querySelectorAll(".right-currency button");
let inpLeft = document.querySelector(".inp-left");
let inpRight = document.querySelector(".inp-right");
let pLeft = document.querySelector(".p-left");
let pRight = document.querySelector(".p-right");
let url = "https://api.exchangerate.host/latest?";
inpLeft.value = 1;
inpRight.value = 0.012161;
pLeft.innerHTML = "1RUB=0.012161USD";
pRight.innerHTML = "1USD=77.283144RUB";
function Style() {
  btnLeft.forEach((item) => {
    item.addEventListener("click", function () {
      btnLeft.forEach((item) => {
        item.classList.remove("active");
      });
      base = this.innerHTML;
      Api(this.parentElement.classList[0]);
    });
    item.addEventListener("click", () => {
      item.classList.add("active");
    });
  });
  btnRight.forEach((item) => {
    item.addEventListener("click", function () {
      btnRight.forEach((item) => {
        item.classList.remove("active");
      });
      symbols = this.innerHTML;
      Api(this.parentElement.classList[0]);
    });
    item.addEventListener("click", () => {
      item.classList.add("active");
    });
  });
}
let i = 1;
function onChange(evt){
  if(i==1){
  evt.target.value = evt.target.value.replace("0","");
  i++
}
  inpLeft.value=evt.target.value
  console.log(evt.target.value)

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
    if(inpLeft.value=="0"){
      inpLeft.addEventListener('input', onChange, true);
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
  if (btn_parent_name == "right-currency") {
    FechRight(base, symbols);
  }
  if (btn_parent_name == "left-currency") {
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
        console.log("2",data)
        inpLeft.value =
          Number(inpRight.value.replace(/\s+/g, "")) * data.rates[`${baseFunc}`];
        imaks(inpLeft);
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
    pLeft.innerHTML = `1${base}=1${base}`;
    pRight.innerHTML = `1${base}=1${base}`;
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
        imaks(inpRight);
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
    pLeft.innerHTML = `1${base}=1${base}`;
    pRight.innerHTML = `1${base}=1${base}`;
  }
}
function imaks(inp) {
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
imaks(inpLeft);
imaks(inpRight);
Style();
inpEvent();