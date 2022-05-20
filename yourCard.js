import { cMinus, cPlus, cardProduct, btr } from "./addCard.js";
import { checkRunFunc } from "./checkInfo.js";

const row = document.querySelector(".row"),
  alertText = document.querySelector(".modal-body"),
  totalPrice = document.querySelector(".total-price"),
  buyBtn = document.querySelector(".buy");

let idData = [];

fetch("https://fakestoreapi.com/products/")
  .then((respone) => respone.json())
  .then((data) => {
    element(data);
    delectProduct();
    buy();
    checkRunFunc(".info", "check-id");
  })
  .catch((err) => console.log(err));

function element(data) {
  data.map((e) => {
    if (cardProduct.find((item) => item.id == e.id)) {
      idData.push({ ...e, cardNumber: 1 });
      row.innerHTML += `
      <div class="col-xl mx-auto cancel-product" product-id="${e.id}">
      <div class="card my-card">
        <img src="${e.image}" class="card-img-top img-fluid" alt="" />
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <p class="card-text">$${e.price}</p>
          <div class="d-flex justify-content-center align-items-center gap-2 my-2">
            <button class="btn btn-outline-warning">-</button>
            <input type="number" class="form-control" value="1" />
            <button class="btn btn-outline-primary">+</button>
          </div>
          <div
            class="btn-group text-center w-100"
            role="group"
          >
            <a href="javascript:void(0)" class="btn btn-outline-danger cancel-product">Cancel</a>
            <a href="javascript:void(0)" class="btn btn-outline-primary info" check-id="${e.id}">Info</a>
          </div>
        </div>
      </div>
    </div>
`;
    } else {
      buyBtn.disabled = true;
    }
  });
}

function delectProduct() {
  document.querySelectorAll(".col-xl").forEach((v) =>
    v.addEventListener("click", () => {
      return;
    })
  ),
    (cancelBtn = document.querySelectorAll(".cancel-product"));
  cancelBtn.forEach((cancleElement) => {
    cancleElement.addEventListener("click", () => {
      if (confirm(`Are you sure you want to delete that Products?`)) {
        cMinus(cancleElement.getAttribute("product-id"), cardTotal);
        cancleElement.remove();
      }
    });
  });
}

// Are you sure you want to delete that ${e.textContent}?
// cMinus(v.getAttribute("product-id"));
// v.remove();

let total = 0;
let unit = 0;
function cardTotal() {
  idData.forEach((item) => {
    total += item.price * item.cardNumber;
    unit += item.cardNumber;
    return;
  });
  totalPrice.textContent = `$${total.toFixed(2)}`;
  return;
}

function buy() {
  cardTotal();
  buyBtn.disabled = false;
  buyBtn.addEventListener("click", (e) => {
    alert("Thanks For Buying");
    totalPrice.textContent = "$0";
    btr();
    document.querySelectorAll(".col-xl").forEach((e) => {
      e.remove();
    });
  });
  return;
}
