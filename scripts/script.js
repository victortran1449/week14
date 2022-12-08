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

const changeParaTextColor = (e) => {
  let selectedColor = e.target.value
  coordinatePara.style.color = selectedColor;
};

map.addEventListener("mouseover", hoverColorText, (once = true));
map.addEventListener("mousemove", showCoordinates);
colorText.addEventListener("click", changeParaTextColor);
