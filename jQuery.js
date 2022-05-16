import { cardCount } from "./addCard.js";

$(".head-nav").html(`
  <div class="nav-bar">
  <a class="nav-icon" href="index.html"
    ><img src="./SVG/online-shopping-online-store-svgrepo-com.svg"
    loading="lazy"
  /></a>
  <i class="fa-solid fa-bars"></i>
  <ul>
  <li class="nav-list"><a href="index.html">Home</a></li>
  <li class="nav-list"><a href="product.html">Product</a></li>
  <li class="nav-list"><a href="about.html">About</a></li>
    <li class="nav-list"><a href="yourCard.html" class="add-card">Your Card <i class="fa-solid fa-bag-shopping"><span class="badge bg-warning text-dark card-count">${cardCount}</span></i></a></li>
  </ul>
  </div>
`);

const icon = $(".fa-bars"),
  nav_list = $(".nav-bar ul"),
  nav_item = $(".nav-bar ul .nav-list");

const intro = $(".intro");

const loadData = $(".intro-load");

const intro_data = [
  {
    img: "./Image/online-shopping-n57.jpg",
    text: "Free Online Shop 🛒",
  },
  {
    img: "./SVG/online-shop.svg",
    text: "Promotion 😍",
  },
  {
    img: "./Image/giveaway.jpg",
    text: "GiveAway 😲",
  },
  {
    img: "./SVG/observo-monitoring_monitoring-illustration_v3.svg",
    text: "24 / 7 Service 📱",
  },
];

$(document).ready(() => {
  $(window).resize(function () {
    if (innerWidth >= 1024) {
      $(icon).css({ display: "none" });
      $(nav_item).css({ display: "inline" });
      $(nav_list).css({ display: "block" });
    } else {
      $(icon).css({ display: "inline" });
      $(nav_item).css({ display: "flex" });
      $(nav_list).css({ display: "none" });
    }
  });
  $(icon).click(function () {
    $(nav_list).slideToggle("slow");
  });
  $(intro_data).each(function (e, val) {
    $(loadData).remove();
    $(intro).append(`
    <div class="intro-group">
    <img src=${val.img} class="free-online-shop"/>
      <h3>${val.text}</h3>
    </div>
    `);
  });
});
