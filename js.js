const price = document.querySelector("#price");
const ppl = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countBtn = document.querySelector(".count");
const errorBtn = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const ifFilled = () => {
  if (price.value == "" || ppl.value == "" || tip.value == "") {
    errorBtn.textContent = "fill all labels";
    costInfo.style.display = "none";
  } else {
    countBill();
    errorBtn.textContent = "";
  }
};

const countBill = () => {
  const pv = Number(price.value);
  const pplV = parseInt(ppl.value);
  const tipV = parseFloat(tip.value);

  const sum = (pv + pv * tipV) / pplV;
  costInfo.style.display = "block";
  cost.textContent = sum.toFixed(2);
};

countBtn.addEventListener("click", ifFilled);
