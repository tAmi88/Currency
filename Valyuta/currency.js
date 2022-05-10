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
FechRight(base, symbols)
function Style() {
  btnLeft.forEach((item) => {
    item.addEventListener("click", function () {
      btnLeft.forEach((item) => {
        item.classList.remove("active");
      });
      base = this.innerHTML;
      console.log(this)
      console.log(this.parentElement.classList.value)
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
// let ileft = true;
// let iright = true;
// let topass=false;
// function onChangeLeft(evt){
//   if(ileft){
//   evt.target.value = evt.target.value.replace("0","");
//   ileft=false
// }
//   inpLeft.value=evt.target.value
//   if(inpLeft.value=="0"){
//     inpLeft.addEventListener('input', self.onChangeLeft, true);
//     ileft=true
//   }
// }
// function onChangeRight(evt){
//   if(iright){
//     console.log("e",evt.target.value)
//   evt.target.value = evt.target.value.replace("0","");
//   iright=false
// }
//   inpRight.value=evt.target.value
//   if(inpRight.value=="0"){
//     inpRight.addEventListener('input', self.onChangeRight, true);
//     iright=true
//   }
// }
function inpEvent() {
  inpLeft.addEventListener("input", () => {
    topass=true
    console.log(inpLeft.value)
    if (inpLeft.value == "") {
      inpRight.value = "";
      pLeft.innerHTML = "";
      pRight.innerHTML = "";
    } else {
      FechRight(base, symbols);
    }
    // if(inpLeft.value=="0"){
    //   inpLeft.addEventListener('input', onChangeLeft, true);
    //   ileft=true
    // }
  });

  inpRight.addEventListener("input", () => {
    console.log(inpRight.value)
    console.log(topass)
    if(topass && inpRight.value==0){
      inpRight.value=0
      console.log(inpRight.value)
      topass=false
    }
    if (inpRight.value == "") {
      inpLeft.value = "";
      pLeft.innerHTML = "";
      pRight.innerHTML = "";
    } else {
      FechLeft(base, symbols);
    }
    // if(inpRight.value=="0"){
    //   inpRight.addEventListener('input', onChangeRight, true);
    //   iright=true
    // }
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
        inpLeft.value =
          Number(inpRight.value.replace(/\s+/g, "")) * data.rates[`${baseFunc}`];
          imaksLeft(inpLeft);
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
        console.log(data)
        inpRight.value =
          inpLeft.value.replace(/\s+/g, "") * data.rates[`${symbolsFunc}`];
          imaksRight(inpRight)
        pLeft.innerHTML = `1${data.base}=${
          data.rates[`${symbolsFunc}`]
        }${symbolsFunc}`;
        fetch(`${url}base=${symbolsFunc}&symbols=${baseFunc}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data.rates)
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
function imaksRight(inp) {
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
function imaksLeft(inp) {
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
imaksLeft(inpLeft);
imaksRight(inpRight);
Style();
inpEvent();