/** @format */

const pushButton = document.querySelector(".change-color");
const back = document.querySelector("body");

pushButton.addEventListener("click", () => {
	const color = getRandomHexColor();
	back.style.backgroundColor = color;
});

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")}`;
}
