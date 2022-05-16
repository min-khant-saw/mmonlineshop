import { cMinus, cPlus, cardProduct, card } from "./addCard.js";

const row = document.querySelector(".row");

let productId;

fetch("https://fakestoreapi.com/products/")
  .then((respone) => respone.json())
  .then((data) => {
    element(data);
  })
  .catch((err) => console.log(err));

function element(data) {
  data.map((e) => {
    if (cardProduct.find((item) => item.id == e.id)) {
      row.innerHTML += `
      <div class="col-xl">
      <div class="card my-card">
        <img src="${e.image}" class="card-img-top img-fluid" alt="" />
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <p class="card-text">$${e.price}</p>
          <div class="d-flex justify-content-center align-items-center gap-2 my-2">
            <button class="btn btn-warning">-</button>
            <input type="number" class="form-control" value="1" />
            <button class="btn btn-primary">+</button>
          </div>
          <div
            class="btn-group text-center w-100"
            role="group"
          >
            <a href="" type="button" class="btn btn-danger">Cancel</a>
            <a href="" type="button" class="btn btn-primary">Info</a>
          </div>
        </div>
      </div>
    </div>
`;
    }
  });
}
