/** @format */
const btn = document.querySelector(".button-one");

const box = document.getElementById("boxes");
const inputAmount = document.querySelector(".menu-input");

btn.addEventListener("click", createBoxes);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function createBoxes() {
	box.innerHTML = "";

	const numberOfBoxes = parseInt(inputAmount.value);

	for (let i = 0; i < numberOfBoxes; i++) {
		const newBox = document.createElement("div");

		const width = 30 + i * 10;
		const height = 30 + i * 10;

		newBox.style.width = width + "px";
		newBox.style.height = height + "px";

		newBox.style.backgroundColor = getRandomHexColor();
		newBox.style.margin = "5px";

		newBox.style.display = "inline-flex";

		box.appendChild(newBox);
	}
}

const btnNext = document.querySelector(".button-two");
btnNext.addEventListener("click", destroyBoxes);

function destroyBoxes() {
	while (box.firstChild) {
		box.removeChild(box.firstChild);
	}
}
