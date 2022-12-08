const map = document.querySelector("#imgbg");
const coordinateText = document.querySelector(".coordinates");

const showCoordinates = (e) => {
  let xCoordinate = e.x;
  let yCoordinate = e.y;
  populateCoordinates(xCoordinate, yCoordinate);
};

const coordinatePara = document.querySelector(".coordinates");

const populateCoordinates = (x, y) => {
  coordinatePara.textContent = `${x}, ${y}`;
};

const colorText = document.querySelector(".hidden");

const hoverColorText = () => {
  colorText.classList.remove("hidden");
};

const radioButtons = document.querySelectorAll("input");

const getSelectedColor = () => {
  let selectedColor;
  for (let button of radioButtons) {
    if (button.checked) {
      selectedColor = button.value;
    }
  }
  return selectedColor;
};

const changeParaTextColor = () => {
  let selectedColor = getSelectedColor();
  coordinatePara.style.color = selectedColor;
};

map.addEventListener("mouseover", hoverColorText);
map.addEventListener("mouseover", showCoordinates);
colorText.addEventListener("click", changeParaTextColor);
