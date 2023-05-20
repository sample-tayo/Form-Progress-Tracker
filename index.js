const nameLitag = document.querySelector("ul li:first-of-type");
const cityLitag = document.querySelector("ul li:nth-of-type(2)");
const telephoneLitag = document.querySelector("ul li:nth-of-type(3)");
const houseLitag = document.querySelector("ul li:nth-of-type(4)");
const countryLitag = document.querySelector("ul li:nth-of-type(5)");
let allInputData = {};

nameLitag.addEventListener("click", function () {
  nameLitag.className = "active";
  createSection(
    "Step 1 / 5",
    "Let's start with your name",
    "Fill in the details below",
    "Enter your name:",
    "text",
    "Enter name",
    "name",
    "name"
  );
});

cityLitag.addEventListener("click", function () {
  cityLitag.className = "active";
  createSection(
    "Step 2 / 5",
    "Pick Your City",
    "Fill in the details below",
    "Enter your city:",
    "text",
    "Enter city",
    "city",
    "city"
  );
});

telephoneLitag.addEventListener("click", function () {
  telephoneLitag.className = "active";
  createSection(
    "Step 3 / 5",
    "What's your phone number",
    "Fill in the details below",
    "Enter your phone Number:",
    "tel",
    "Enter number +234",
    "phone",
    "phone"
  );
});

houseLitag.addEventListener("click", function () {
  houseLitag.className = "active";
  createSection(
    "Step 4 / 5",
    "Your House Address",
    "Fill in the details below",
    "Enter your house address:",
    "street",
    "stret, city, state",
    "street",
    "street"
  );
});

countryLitag.addEventListener("click", function () {
  countryLitag.className = "active";
  createSection(
    "Step 5 / 5",
    "Country Of Residence",
    "Fill in the details below",
    "Country",
    "country",
    "country",
    "country",
    "country"
  );
});

function createSection(
  step,
  heading,
  subheading,
  labelContent,
  inputType,
  inputPlaceholder,
  inputName,
  inputID
) {
  const existingSections = document.querySelectorAll("section.main-content");
  existingSections.forEach((section) => section.remove());

  const section = document.createElement("section");
  section.className = "main-content";

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  section.appendChild(contentDiv);

  const contentSpan = document.createElement("span");
  contentSpan.textContent = step;
  contentDiv.appendChild(contentSpan);

  const paragraph = document.createElement("p");
  paragraph.textContent = heading;
  contentDiv.appendChild(paragraph);

  const contentSpan2 = document.createElement("span");
  contentSpan2.textContent = subheading;
  contentDiv.appendChild(contentSpan2);

  const Label = document.createElement("label");
  Label.textContent = labelContent;
  Label.setAttribute("for", inputID);
  contentDiv.appendChild(Label);

  const Input = document.createElement("input");
  Input.setAttribute("type", inputType);
  Input.setAttribute("placeholder", inputPlaceholder);
  Input.setAttribute("name", inputName);
  Input.setAttribute("id", inputID);
  contentDiv.appendChild(Input);

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next page";
  contentDiv.appendChild(nextButton);
  nextButton.addEventListener("click", function () {
    let value = Input.value;
    allInputData[inputName] = value;
    console.log(value);
    console.log(allInputData);

    Input.value = "";
  });

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  contentDiv.appendChild(backButton);

  const main = document.querySelector("main");
  main.appendChild(section);
}
