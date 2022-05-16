import { addCardRunFunc, card } from "./addCard.js";

const swiper_wrapper = document.querySelector(".swiper-wrapper");
const load = document.querySelector(".features-load");
const countDownAd = document.getElementsByClassName("count-down-ad")[0];
const countDownText = document.getElementsByClassName("count-down-text")[0];
const adContainer = document.getElementsByClassName("contariner-ads")[0];
const btnLight = document.querySelectorAll(".btn-light");

window.addEventListener("resize", () => {
  if (innerWidth <= 1024) {
    btnLight.forEach((v) => {
      v.className = "btn btn-dark ads-btn";
    });
  } else {
    btnLight.forEach((v) => {
      v.className = "btn btn-light ads-btn";
    });
  }
});

const totalStar = 5;

let realWidth = [];

let textId = 10;

let adId = 1;

let currentImageAd = 0;

let realTime;

const countDownImage = [
  "./Image/nivea man.jpg",
  "./Image/shoe.jpg",
  "./Image/iphone.jpg",
];

const adsArray = [
  {
    img: "https://us.v-cdn.net/6032932/uploads/ON07WHHINDJV/52b527c8-c17d-4ca3-b54b-7b388d2f2875.jpeg",
    text: "Coda Shop",
    link: "https://www.codashop.com/international",
    video: "./video/codashop.mp4",
  },
  {
    img: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/279627408_959022218112055_6497446267733218428_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-6&_nc_sid=730e14&_nc_ohc=aXsut8_3rOUAX8s3q9F&_nc_ht=scontent-sin6-1.xx&oh=00_AT_MgJnOUulgsw38o4LlPkJ0bOGTE5ncOb48UW5H8hfg1A&oe=627EEAA9",
    text: "Pubg Mobile",
    link: "https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en&gl=US",
    video: "./video/pubg.mp4",
  },
  {
    img: "https://www.androidheadlines.com/wp-content/uploads/2019/10/Mobile-Legends-1420x878.webp",
    text: "Mobile Legends",
    link: "https://play.google.com/store/apps/details?id=com.mobile.legends&hl=en&gl=US",
    video: "./video/mlbb.mp4",
  },
];

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1200,
  slidesPerColumn: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

async function fetchData() {
  try {
    const respone = await fetch("https://fakestoreapi.com/products/");
    const data = await respone.json();
    htmlContent(data);
  } catch (error) {
    console.log(error);
    swiper_wrapper.parentElement.innerHTML =
      "<h3 class='error'>Network Error Please Refresh The Page</h3>";
  }
  return;
}

function htmlContent(data) {
  data
    .map((e) => {
      if (e.category === "men's clothing") {
        elements(e);
        rating(e);
        card();
        lengFunc(e);
        checkRunFunc();
        addCardRunFunc(true, e);
        textId++;
      }
    })
    .join("");
  return;
}

function elements(e) {
  load.remove();
  swiper_wrapper.innerHTML += `
  <div class="swiper-slide">
  <div class="card slide-card h-100">
  <img src="${e.image}" class="card-img-top slide-card-img" loading="lazy"/>
    <div class="card-body slide-card-body">
    <h5 class="card-title slide-card-title">${e.title}</h5>
    <span class="card-text slide-card-text" id="${textId}">${e.description}</span>
      <div class="outer-star">
      <div class="star-container">
      <div class="inner-star" id="${e.id}"></div>
      </div>
      <span class="rate-count">${e.rating.rate}</span>
      </div>
    <p style="color: #76B711;">Price : <b>$${e.price}</b></p>
    <div class="btn-gp">
    <button type="button" class="btn btn-success addcard" productId="${e.id}">Add Card <i class="fa-solid fa-cart-plus"></i></button>
    <a href="javascript:void(0)" class="btn btn-primary check" checkId="${e.id}">Check Info...</a>
    </div>
    </div>
  </div>
  </div>
  `;
}

function rating(e) {
  let rates = e.rating.rate;
  const math = (rates / totalStar) * 100;
  const starRound = (math / 10) * 10 + "%";
  realWidth.push({ starRound });
  document.getElementById(e.id).style.width = starRound;
}

function checkRunFunc() {
  document.querySelectorAll(".check").forEach((v) => {
    v.addEventListener("click", (event) => {
      check(v.getAttribute("checkId"), event);
    });
  });
}

function check(id, event) {
  sessionStorage.setItem("productId", id);
  event.preventDefault();
  location = "Product Info.html";
  return;
}

function lengFunc(e) {
  const lg = document.getElementById(textId);
  const maxLength = e.description;
  lg.innerHTML = maxLength.slice(0, 100) + "<span class='dot-span'>...</span>";
}

function adImageFunc() {
  if (realTime === "0d 0h 0m 0s") {
    countDownAd.innerHTML = "";
    clearInterval();
    return;
  }

  if (currentImageAd >= countDownImage.length) {
    currentImageAd = 0;
  }
  countDownAd.innerHTML = `<a href="product.html"><img class="ad-real-image" src="${countDownImage[currentImageAd]}" loading="lazy"/></a>`;
  currentImageAd++;
}

function countDownTime() {
  const expiryDate = new Date("Sun June 09 2022 15:34:54").getTime();

  const currentTime = new Date().getTime();
  const distance = expiryDate - currentTime;
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hour = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance < 0) {
    clearInterval();
  }

  realTime = `${day}d ${hour}h ${minute}m ${second}s`;

  countDownText.innerHTML = `${day}d ${hour}h ${minute}m ${second}s`;
  return;
}

adsArray.forEach((v) => {
  adContainer.innerHTML += `
    <a href=${v.link} target="_blank" class="col-sm-2 at-col hover-to-ad" id=ad${adId}>
      <div class="at-card" vdLink=${v.video} imageLink="${v.img}">
        <img src="${v.img}" class="at-img" loading="lazy"/>
         </div>
      </a>
    `;
  adId++;
});

function fullAdFunc() {
  document.querySelectorAll(".at-card").forEach((v) => {
    v.addEventListener("mousemove", (e) => {
      videoPlay(v);
    });
    v.addEventListener("mouseleave", (e) => {
      videoExit(v);
    });
  });
}

function videoPlay(link) {
  link.innerHTML = `<video src="${link.getAttribute(
    "vdLink"
  )}" class="at-img" autoplay muted loop/>`;
  return;
}

function videoExit(link) {
  link.innerHTML = `<img src="${link.getAttribute(
    "imageLink"
  )}" class="at-img" />`;
  return;
}

/** Running Function */

fullAdFunc();
fetchData();
adImageFunc();
setInterval(adImageFunc, 5500);
setInterval(countDownTime, 1000);
