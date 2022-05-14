/* Companys */
const company = document.querySelector(".company");
const companys = ["", "", "", "", ""];

for (let y = 0; y < companys.length; y++) {
  const img = document.createElement("img");
  img.src = companys[y];
  img.alt = `${y}`;
  company.append(img);
}
