const firstSpan = document.querySelector("span:first-of-type");
const secondSpan = document.querySelector("span:nth-of-type(2)");
const nameLitag = document.querySelector("ul li:first-of-type");
const cityLitag = document.querySelector("ul li:nth-of-type(2)");
const telephoneLitag = document.querySelector("ul li:nth-of-type(3)");
const houseLitag = document.querySelector("ul li:nth-of-type(4)");
const countryLitag = document.querySelector("ul li:nth-of-type(5)");
const label = document.createElement("label");
const parentElement = document.getElementsByClassName("content");
const main = document.querySelector("main");

// firstSpan.textContent = "hello";
nameLitag.addEventListener("click", function () {
  nameLitag.classList.add("active");
  console.log("name was clicked");
  firstSpan.textContent = "Step 1 / 4";
  label.innerHTML = "Enter your name";
});
cityLitag.addEventListener("click", function () {
  cityLitag.classList.add("active");
  console.log("city was clicked");
  firstSpan.textContent = "Step 2 / 5";
  label.innerHTML = "Enter your current city";
  paragraphElement.textContent = "Moving on to your city";
});
