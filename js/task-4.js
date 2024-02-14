/** @format */

const dataToSubmit = document.querySelector(".login-form");
dataToSubmit.addEventListener("submit", toSubmit);

function toSubmit(e) {
	e.preventDefault();
	const fieldMail = dataToSubmit.elements.email.value;
	const fieldPassword = dataToSubmit.elements.password.value;

	if (fieldMail === "" || fieldPassword === "") {
		const dataObj = {
			email: fieldMail.trim(),
			password: fieldPassword.trim(),
		};

		alert("All form fields must be filled in");
		return;
	}

	dataToSubmit.reset();
}
