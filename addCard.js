let cardCount = localStorage.getItem("cardCount") || 0;

let cardProduct = JSON.parse(localStorage.getItem("cardProduct")) || [];

let multiCardMod = false;

function card() {
  const card = document.querySelectorAll(".slide-card-img");
  card.forEach((e) => {
    e.addEventListener("click", () => {
      const fullImage = document.createElement("div");
      fullImage.classList.add("full-image");
      document.body.append(fullImage);
      fullImage.innerHTML = `
        <i class="fa-solid fa-x"></i>
        <img src="${e.src}" loading="lazy"/>
        `;
      document
        .querySelector(".fa-x")
        .addEventListener("click", (e) => fullImage.remove());
    });
  });
}

let test;

function addCard(e) {
  if (cardProduct.some((item) => item.id === e.getAttribute("productId"))) {
    return;
  } else {
    cardCount === "null" ? (cardCount = 0) : cardCount;
    cardCount++;
    localStorage.setItem("cardCount", cardCount);
    cardProduct.push({ id: e.getAttribute("productId") });
    localStorage.setItem("cardProduct", JSON.stringify(cardProduct));
    if (multiCardMod)
      document.querySelector(".card-count").innerHTML = cardCount;
  }
}

function addCardRunFunc(mode) {
  multiCardMod = mode;
  document.querySelectorAll(".addcard").forEach((v) => {
    v.addEventListener("click", () => {
      addCard(v);
    });
  });
  return;
}

function removeCard(id) {
  for (let i = 0; i < cardProduct.length; i++) {
    if (cardProduct[i].id === id) {
      cardCount--;
      cardProduct.splice(i, 1);
      localStorage.setItem("cardProduct", JSON.stringify(cardProduct));
      localStorage.setItem("cardCount", cardCount);
    }
  }
  return;
}

function plusCard() {}

function buyToRestart() {
  cardProduct = null;
  cardCount = null;
  localStorage.setItem("cardProduct", JSON.stringify(cardProduct));
  localStorage.setItem("cardCount", cardCount);

  return;
}

export {
  cardCount,
  cardProduct,
  card,
  addCard,
  addCardRunFunc,
  removeCard as cMinus,
  plusCard as cPlus,
  buyToRestart as btr,
};
