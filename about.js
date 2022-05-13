/* Scroll and Animation bar */
const body = document.querySelector(".about");
const ulDiv = document.querySelector(".ulDiv");
const ul = document.querySelector(".ul");
const scroll = document.querySelector(".scroll");

const liTagArray = ["Home", "About", "Item"];

let getLiTag;
for (let x = 0; x < liTagArray.length; x++) {
  const liTag = document.createElement("li");
  liTag.id = x;
  liTag.append(liTagArray[x]);
  ul.append(liTag);
  liTag.addEventListener("click", (event) => {
    const liTagId = event.target.id;
    getLiTag = document.getElementById(liTagId);
    scroll.style.width = getLiTag.offsetWidth + "px";
    scroll.style.transform = `translateX(${getLiTag.offsetLeft}px)`;
  });
  if (x === 1) {
    scroll.style.width = liTag.offsetWidth + "px";
    scroll.style.transform = `translateX(${liTag.offsetLeft}px)`;
  }
}
/*--------------------------------*/

/* Phone Size Menu */
const phoneMenuDiv = document.querySelector(".phoneMenuDiv");
const phoneList = document.querySelector(".phoneList");

phoneMenuDiv.addEventListener("click", () => {
  if (phoneMenuDiv.classList.contains("phoneMenuDiv2")) {
    phoneMenuDiv.classList.remove("phoneMenuDiv2");
    phoneList.classList.remove("phoneList2");
    phoneList.innerHTML = "";
  } else {
    phoneMenuDiv.classList.add("phoneMenuDiv2");
    const phoneMenuList = `<div>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Item</a>
    <a href="#">Log in</a>
    </div>`;
    phoneList.classList.add("phoneList2");
    phoneList.innerHTML = phoneMenuList;
  }
});

/* Companys */
const company = document.querySelector(".company");
const companys = ["", "", "", "", ""];

for (let y = 0; y < companys.length; y++) {
  const img = document.createElement("img");
  img.src = companys[y];
  img.alt = `${y}`;
  company.append(img);
}
