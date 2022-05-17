function checkRunFunc(elementClass, id) {
  document.querySelectorAll(elementClass).forEach((v) => {
    v.addEventListener("click", (event) => {
      check(v.getAttribute(id), event);
    });
  });
  return;
}

function check(id, event) {
  sessionStorage.setItem("productId", id);
  event.preventDefault();
  location = "ProductInfo.html";
  return;
}

export { checkRunFunc };
