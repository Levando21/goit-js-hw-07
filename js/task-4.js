/** @format */

const dataToSubmit = document.querySelector(".login-form");
dataToSubmit.addEventListener("submit", toSubmit);

function toSubmit(e) {
	e.preventDefault();
	const fieldMail = dataToSubmit.elements.email.value;
	const fieldPassword = dataToSubmit.elements.password.value;

	const dataObj = {
		email: fieldMail.trim(),
		password: fieldPassword.trim(),
	};

	if (fieldMail === "" || fieldPassword === "") {
		console.log(alert("All form fields must be filled in"));
	}

	dataToSubmit.reset();
}
