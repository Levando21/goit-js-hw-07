/** @format */

const inputElem = document.getElementById("name-input");
const mainString = document.querySelector("h1");
const newString = document.getElementById("name-output");

inputElem.addEventListener("blur", callback);

function callback() {
	const inputValue = inputElem.value.trim();
	if (inputValue === "") {
		newString.textContent = "Anonymous";
	} else {
		newString.textContent = inputValue;
	}
	const fullString = mainString.textContent;
	console.log(fullString);
}
