const rangeSlide = document.querySelector(".range");
const switchSlide = document.querySelector(".switch .slider");
const rangePrice = {
  "1": { pages: "10K", price: 8, range: 5 },
  "2": { pages: "50K", price: 12, range: 25 },
  "3": { pages: "100K", price: 16, range: 50 },
  "4": { pages: "500K", price: 24, range: 75 },
  "5": { pages: "1M", price: 36, range: 100 },
};

let rangeNumber = rangeSlide.value;
let yearDis;
const getRange = (num) => {
  if (num in rangePrice) {
    let getPrice = rangePrice[num];
    pricingCharge(getPrice);
    yearDiscount(yearDis, getPrice);
    rangeSlide.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${getPrice.range}%, hsl(224, 65%, 95%) 0%)`;
    rangeSlide.addEventListener(
      "change",
      (e) => {
        yearDiscount(yearDis, getPrice);
      },
      { once: true },
    );
  }
};

rangeSlide.oninput = function () {
  let rangeNumber = this.value;
  getRange(rangeNumber);
};
const pricingCharge = (charge) => {
  switchSlide.onclick = (e) => {
    yearDis = e.target.toggleAttribute("on");
    yearDiscount(yearDis, charge);
  };
};

const yearDiscount = (discount, charge) => {
  if (discount) {
    document.querySelector(".pricing__monthly h1").innerText = `$${charge.price * 12 * 0.75}.00`;
    document.querySelector(".pricing__charge .pages").innerText = `${charge.pages} Pageviews`;
    document.querySelector(".year__month").innerText = `year`;
    // document.querySelector(".pricing__monthly h1").innerText = `$${(charge.price * 12 * 75) / 100}.00`;
  } else {
    document.querySelector(".year__month").innerText = `month`;
    document.querySelector(".pricing__charge .pages").innerText = `${charge.pages} Pageviews`;
    document.querySelector(".pricing__monthly h1").innerText = `$${charge.price}.00  `;
  }
};
getRange(rangeNumber);
