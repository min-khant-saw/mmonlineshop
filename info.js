import { addCardRunFunc } from "./addCard.js";

const titleIcon = document.querySelector("link[rel*='icon']");
const productId = sessionStorage.getItem("productId");

const totalStar = 5;

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then((respone) => respone.json())
  .then((data) => {
    document.title = data.title;
    titleIcon.href = data.image;
    element(data);
    star(data);
    addCardRunFunc(false);
  })
  .catch((err) => {
    document.body.innerHTML =
      "<h3 class='error text-danger text-center'>Network Error Please Refresh The Page</h3>";
    console.log(err);
  });

function test(data) {
  data.map((e) => {
    console.log(e.id);
  });
  return;
}

function element(data) {
  return (document.body.innerHTML = `
  <div class="container-fluid">
  <div class="row d-flex align-items-center">
  <div class="col">
    <img class="product-image rounded-2 img-fluid" src="${data.image}"/>
    <h3 class="product-title text-secondary text-center">${data.title}</h3>
    <h4 class="product-price text-success"><i>Price: ${data.price}$</i></h4>
      <div class="star-team">
          <div class="star-container">
          <div class="star"></div>
      </div>
          <span class="star-count">${data.rating.rate}</span>
  </div>
  <div class="btn-gp">
    <a href="index.html" class="btn btn-danger">Back To Home Page</a>
    <button type="button" class="btn btn-success addcard" productId=${data.id}>Add Card <i class="fa-solid fa-cart-plus"></i></button>
  </div>
  </div>
    <div class="col-md">
    <h2 class="product-category text-center text-warning">${data.category}</h2>
    <p class="product-description fs-5 text-primary opacity-50 text-center">${data.description}</p>
  </div>
  </div>
  </div>
  `);
}

function star(data) {
  const rating = data.rating.rate;
  const rateCalcOne = (rating / totalStar) * 100;
  const rateCalcTwo = (rateCalcOne / 10) * 10 + "%";
  document.querySelector(".star").style.width = rateCalcTwo;
  document
    .querySelector(".star-container")
    .addEventListener("mousemove", (e) => {
      const curerntWidth =
        document.querySelector(".star-container").clientWidth;
      const mouseWidth = e.offsetX;
      const starWidth = (mouseWidth / curerntWidth) * 100 + "%";
      document.querySelector(".star").style.width = starWidth;
      document.querySelector(".star-count").textContent =
        Math.floor((mouseWidth / curerntWidth) * 100) / 20;
    });
  return;
}
