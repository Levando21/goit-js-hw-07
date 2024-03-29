/** @format */

const inputElem = document.getElementById("name-input");
const mainString = document.getElementById("h1");
const newString = document.getElementById("name-output");

inputElem.addEventListener("input", callback);

function callback() {
	const inputValue = inputElem.value.trim();
	if (inputValue === "") {
		newString.textContent = "Anonymous";
	} else {
		newString.textContent = inputValue;
	}
	const fullString = mainString.textContent;
}
