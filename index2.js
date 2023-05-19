const nameLitag = document.querySelector("ul li:first-of-type");
const cityLitag = document.querySelector("ul li:nth-of-type(2)");
const telephoneLitag = document.querySelector("ul li:nth-of-type(3)");
const houseLitag = document.querySelector("ul li:nth-of-type(4)");
const countryLitag = document.querySelector("ul li:nth-of-type(5)");
let allInputData = {};
// const activeClass = document.querySelector(".active");
// const ulList = document.querySelectorAll("ul li");

//fill name details
nameLitag.addEventListener("click", function () {
  nameLitag.className = "active";
  const section = document.createElement("section");
  section.className = "main-content";

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  section.appendChild(contentDiv);

  const contentSpan = document.createElement("span");
  contentSpan.textContent = "Step 1 / 5";
  contentDiv.appendChild(contentSpan);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Let's start with your name";
  contentDiv.appendChild(paragraph);

  const contentSpan2 = document.createElement("span");
  contentSpan2.textContent = "Fill in the details below";
  contentDiv.appendChild(contentSpan2);

  // const nothing = document.createElement("div");
  // const hrLine = document.createElement("hr");
  // nothing.appendChild(hrLine);
  // section.appendChild(nothing);
  // section.appendChild(hrLine);

  const Label = document.createElement("label");
  Label.textContent = "Enter your name:";
  Label.setAttribute("for", "name");
  contentDiv.appendChild(Label);

  const InputName = document.createElement("input");
  InputName.setAttribute("type", "text");
  InputName.setAttribute("placeholder", "Enter name");
  InputName.setAttribute("name", "name");
  InputName.setAttribute("id", "name");
  contentDiv.appendChild(InputName);

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next page";
  contentDiv.appendChild(nextButton);
  nextButton.addEventListener("click", function () {
    let name = InputName.value;
    allInputData.name = name;
    console.log(name);
    console.log(allInputData);

    InputName.value = "";
  });

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  contentDiv.appendChild(backButton);

  const main = document.querySelector("main");
  main.appendChild(section);
});

//city pick
cityLitag.addEventListener("click", function () {
  cityLitag.className = "active";

  const section = document.createElement("section");
  section.className = "main-content";

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  section.appendChild(contentDiv);

  const contentSpan = document.createElement("span");
  contentSpan.textContent = "Step 2 / 5";
  contentDiv.appendChild(contentSpan);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Pick Your City";
  contentDiv.appendChild(paragraph);

  const contentSpan2 = document.createElement("span");
  contentSpan2.textContent = "Fill in the details below";
  contentDiv.appendChild(contentSpan2);

  const Label = document.createElement("label");
  Label.textContent = "Enter your city:";
  Label.setAttribute("for", "city");
  contentDiv.appendChild(Label);

  const InputCity = document.createElement("input");
  InputCity.setAttribute("type", "text");
  InputCity.setAttribute("placeholder", "Enter city");
  InputCity.setAttribute("name", "city");
  InputCity.setAttribute("id", "city");
  contentDiv.appendChild(InputCity);

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next page";
  contentDiv.appendChild(nextButton);
  nextButton.addEventListener("click", function () {
    let city = InputCity.value;
    allInputData.name = city;
    console.log(city);
    console.log(allInputData);

    InputCity.value = "";
  });

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  contentDiv.appendChild(backButton);

  const main = document.querySelector("main");
  main.appendChild(section);
});
//Telephone number
telephoneLitag.addEventListener("click", function () {
  telephoneLitag.className = "active";

  const section = document.createElement("section");
  section.className = "main-content";

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  section.appendChild(contentDiv);

  const contentSpan = document.createElement("span");
  contentSpan.textContent = "Step 3 / 5";
  contentDiv.appendChild(contentSpan);

  const paragraph = document.createElement("p");
  paragraph.textContent = `What's your phone number`;
  contentDiv.appendChild(paragraph);

  const contentSpan2 = document.createElement("span");
  contentSpan2.textContent = "Fill in the details below";
  contentDiv.appendChild(contentSpan2);

  const Label = document.createElement("label");
  Label.textContent = "Enter your phone Number:";
  Label.setAttribute("for", "phone");
  contentDiv.appendChild(Label);

  const Input = document.createElement("input");
  Input.setAttribute("type", "tel");
  Input.setAttribute("placeholder", "Enter number +234");
  Input.setAttribute("name", "phone");
  Input.setAttribute("id", "phone");
  contentDiv.appendChild(Input);

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next page";
  contentDiv.appendChild(nextButton);

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  contentDiv.appendChild(backButton);

  const main = document.querySelector("main");
  main.appendChild(section);
});
//house address
houseLitag.addEventListener("click", function () {
  houseLitag.className = "active";

  const section = document.createElement("section");
  section.className = "main-content";

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  section.appendChild(contentDiv);

  const contentSpan = document.createElement("span");
  contentSpan.textContent = "Step 4 / 5";
  contentDiv.appendChild(contentSpan);

  const paragraph = document.createElement("p");
  paragraph.textContent = `Your House Address`;
  contentDiv.appendChild(paragraph);

  const contentSpan2 = document.createElement("span");
  contentSpan2.textContent = "Fill in the details below";
  contentDiv.appendChild(contentSpan2);

  const Label = document.createElement("label");
  Label.textContent = "Enter your house address:";
  Label.setAttribute("for", "street");
  contentDiv.appendChild(Label);

  const Input = document.createElement("input");
  Input.setAttribute("type", "street");
  Input.setAttribute("placeholder", "stret, city, state");
  Input.setAttribute("name", "street");
  Input.setAttribute("id", "street");
  contentDiv.appendChild(Input);

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next page";
  contentDiv.appendChild(nextButton);

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  contentDiv.appendChild(backButton);

  const main = document.querySelector("main");
  main.appendChild(section);
});

// country of residence
countryLitag.addEventListener("click", function () {
  countryLitag.className = "active";

  const section = document.createElement("section");
  section.className = "main-content";

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  section.appendChild(contentDiv);

  const contentSpan = document.createElement("span");
  contentSpan.textContent = "Step 5 / 5";
  contentDiv.appendChild(contentSpan);

  const paragraph = document.createElement("p");
  paragraph.textContent = ` Country Of Residence`;
  contentDiv.appendChild(paragraph);

  const contentSpan2 = document.createElement("span");
  contentSpan2.textContent = "Fill in the details below";
  contentDiv.appendChild(contentSpan2);

  const Label = document.createElement("label");
  Label.textContent = "Country";
  Label.setAttribute("for", "country");
  contentDiv.appendChild(Label);

  const Input = document.createElement("input");
  Input.setAttribute("type", "country");
  Input.setAttribute("placeholder", "country");
  Input.setAttribute("name", "country");
  Input.setAttribute("id", "country");
  contentDiv.appendChild(Input);

  const submitButton = document.createElement("button");
  submitButton.textContent = "submit";
  contentDiv.appendChild(submitButton);

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  contentDiv.appendChild(backButton);

  const main = document.querySelector("main");
  main.appendChild(section);
});
