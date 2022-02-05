// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}}

const form = document.querySelector("#signup");

const NOMBRE_REQUIRED = "Introduzca su nombre";
const APELLIDOS_REQUIRED ="Introduzca su apellido";
//const FECHA_NACIMIENTO_REQUIRED = "Please enter your birthday";


form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nombreValid = hasValue(form.elements["nombre"], NOMBRE_REQUIRED);
	let apellidosValid = has.Value(form.elements["apellidos"], APELLIDOS_REQUIRED);
	//let fechaNacimientoValid = has.Value(form.elements["fecha_nacimiento"], FECHA_NACIMIENTO_REQUIRED);

	// if valid, submit the form.
	if (nombreValid && apellidosValid ) {
		alert("El nombre es " );
	}
});