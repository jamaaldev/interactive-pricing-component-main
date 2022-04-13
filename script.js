const rangeSlide = document.querySelector(".range");
const switchSlide = document.querySelector(".switch .slider");
const checkSlide = document.getElementById("switch");
const rangePrice = {
  "1": { pages: "10K", price: 8, range: 5 },
  "2": { pages: "50K", price: 12, range: 25 },
  "3": { pages: "100K", price: 16, range: 50 },
  "4": { pages: "500K", price: 24, range: 75 },
  "5": { pages: "1M", price: 36, range: 100 },
};
let checkMedia = window.matchMedia("(max-width: 600px)");

let rangeNumber = rangeSlide.value;
let yearDis;
const getRange = (num) => {
  if (num in rangePrice) {
    let getPrice = rangePrice[num];
    pricingCharge(getPrice);
    checkIFTrue(yearDis, getPrice);
    rangeSlide.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${getPrice.range}%, hsl(224, 65%, 95%) 0%)`;
    rangeSlide.addEventListener(
      "change",
      (e) => {
        if (checkSlide.checked === true) {
          yearDiscount(checkSlide.checked, getPrice);
        }
      },
      { once: true },
    );
    checkSlide.onclick = (e) => {
      yearDis = checkSlide.checked;
      yearDiscount(yearDis, getPrice);
      checkIFTrue(yearDis, getPrice);
    };
    if (checkSlide.checked === true) {
      yearDiscount(checkSlide.checked, getPrice);
    }
  }
};

rangeSlide.oninput = function () {
  let rangeNumber = this.value;
  getRange(rangeNumber);
};
const pricingCharge = (charge) => {
  if (checkSlide.checked === true) {
    yearDiscount(checkSlide.checked, charge);
  }
  checkSlide.onclick = (e) => {
    yearDis = checkSlide.checked;
    yearDiscount(yearDis, charge);
    queryMedia(checkMedia);
  };
};

const checkIFTrue = (yearDis, getPrice) => {
  if (checkSlide.checked === true) {
    yearDiscount(yearDis, getPrice);
    document.querySelector(".total").classList.add("total__show");
    queryMedia(checkMedia);
  } else if (checkSlide.checked === false) {
    document.querySelector(".total").classList.remove("total__show");
    yearDiscount(yearDis, getPrice);
    queryMedia(checkMedia);
  }
};

const queryMedia = (media) => {
  if (checkSlide.checked === true && media.matches === true) {
    document.querySelector(".discount").innerText = `+25%`;
  }
  if (checkSlide.checked === true && media.matches === false) {
    document.querySelector(".discount").innerText = `+Discount`;
  }
  if (checkSlide.checked === false && media.matches === false) {
    document.querySelector(".discount").innerText = `25% Discount`;
  }
  if (checkSlide.checked === false && media.matches === true) {
    document.querySelector(".discount").innerText = `25%`;
  }
};
queryMedia(checkMedia);

// eventListener for mobile and desktop size change
checkMedia.addEventListener("change", queryMedia);
const yearDiscount = (discount, charge) => {
  if (discount) {
    document.querySelector(".pricing__monthly h1").innerText = `$${charge.price * 0.75}.00`;
    document.querySelector(".pricing__charge .pages").innerText = `${charge.pages} Pageviews`;
    document.querySelector(".total").innerText = `Total Year: $${charge.price * 12 * 0.75}.00`;
    document.querySelector(".year__month").innerText = `month`;
    // document.querySelector(".pricing__monthly h1").innerText = `$${(charge.price * 12 * 75) / 100}.00`;
  } else {
    document.querySelector(".year__month").innerText = `month`;
    document.querySelector(".total").innerText = ``;
    document.querySelector(".pricing__charge .pages").innerText = `${charge.pages} Pageviews`;
    document.querySelector(".pricing__monthly h1").innerText = `$${charge.price}.00  `;
  }
};
getRange(rangeNumber);
