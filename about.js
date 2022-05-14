/* Companys */
const company = document.querySelector(".company");
const companys = [
  "https://uptimerobot.com/assets/images/godaddy-logo.svg",
  "https://uptimerobot.com/assets/images/nasa.svg",
  "https://uptimerobot.com/assets/images/moodys-logo.svg",
  "https://uptimerobot.com/assets/images/ibm-logo.svg",
  "https://uptimerobot.com/assets/images/expedia-logo.svg",
];

for (let y = 0; y < companys.length; y++) {
  const img = document.createElement("img");
  img.src = companys[y];
  img.alt = `${y}`;
  company.append(img);
}
