/** @format */

const changeColorButton = document.querySelector(".change-color");
const bodyElement = document.querySelector("body");

changeColorButton.addEventListener("click", () => {
	const color = getRandomHexColor();
	bodyElement.style.backgroundColor = color;
	document.querySelector(".color").textContent = color;
});

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")}`;
}
