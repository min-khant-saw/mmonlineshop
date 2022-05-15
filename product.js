const search = document.querySelector(".search"),
  navBar = document.querySelector(".nav-bar"),
  navSection = document.querySelector(".nav-section"),
  dropDownItems = document.querySelectorAll(".drop-i");

var noScrollHeight = pageYOffset;

window.addEventListener("scroll", () => {
  const scrollHeight = pageYOffset;
  const navBarHeight = navBar.offsetHeight;
  if (noScrollHeight > scrollHeight) {
    navSection.style.top = `0px`;
  } else {
    navSection.style.top = `-${navBarHeight}px`;
    console.log((navSection.style.top = `-${navBarHeight}px`));
  }
  noScrollHeight = scrollHeight;
});

search.addEventListener("click", (event) => {
  event.preventDefault();
});

dropDownItems.forEach((v) => {
  v.addEventListener("click", (e) => e.preventDefault());
});
