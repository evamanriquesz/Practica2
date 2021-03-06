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
}


const form = document.querySelector("#signup");

const NOMBRE_REQUIRED = "Por favor, introduce tu nombre";
const APELLIDOS_REQUIRED = "Por favor, introduce tus apellidos";
const FECHA_NACIMIENTO_REQUIRED = "Por favor, introduce tu fecha de nacimiento";
const TIENDA_REQUIRED ="Por favor, seleccione una tienda";
const CIUDAD_REQUIRED = "Por favor, introduce una ciudad";
const PAIS_REQUIRED = "Por favor, introduce un pais";
const HABLANOS_DE_TI_REQUIRED ="Por favor, háblanos de ti";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nombreValid = hasValue(form.elements["nombre"], NOMBRE_REQUIRED);
	let apellidosValid = hasValue(form.elements["apellidos"], APELLIDOS_REQUIRED);
	let fechaNacimientoValid = hasValue(form.elements["fecha_nacimiento"], FECHA_NACIMIENTO_REQUIRED);
	let tiendaValid = hasValue(form.elements["tiendas"], TIENDA_REQUIRED);
	let ciudadValid = hasValue(form.elements["ciudad"], CIUDAD_REQUIRED);
	let paisValid = hasValue(form.elements["pais"], PAIS_REQUIRED);
	let hablanosDeTiValid = hasValue(form.elements["hablanos_de_ti"], HABLANOS_DE_TI_REQUIRED);
	// if valid, submit the form.
	if (nombreValid && apellidosValid && fechaNacimientoValid && tiendaValid && ciudadValid && paisValid && hablanosDeTiValid) {
		alert("Nombre introducido: " +form.elements["nombre"].value  + "\nApellidos introducidos: " + form.elements["apellidos"].value +"\nFecha de nacimiento: " + form.elements["fecha_nacimiento"].value + "\nTienda seleccionada: " + form.elements["tiendas"].value + "\nCiudad introducida: "+form.elements["ciudad"].value + "\nPaís introducido: "+ form.elements["pais"].value + "\nHáblanos de ti: " + form.elements["hablanos_de_ti"].value);
	}
});

