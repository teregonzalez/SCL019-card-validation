import validator from './validator.js';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    const creditCardNumber = document.getElementById('cNumber').value;
    let selectBank = document.getElementById("select-example").selectedIndex;
    let nameComple = document.getElementById('Ingrese-Nombre').value;
    let dateExp = document.getElementById('eNumber').value;
    let numberCvv = document.getElementById('cvv').value;


    if (selectBank == null || selectBank == 0) {
        alert("Seleccione su banco");
        return;
    }

    if (nameComple.length == "") {
        alert("Ingrese su nombre y apellido");
        return;
    }

    if (dateExp.length == "") {
        alert("Ingrese fecha de expiración");
        return;
    }

    if (numberCvv.length == "") {
        alert("Ingrese número secreto");
        return;
    }

    if (creditCardNumber.length != 16 ) {
        alert("Ingrese los 16 digitos de su n° de tarjeta");
        return;
    }

    if (isNaN(creditCardNumber)) {
        alert("Debe ingresar solo números")
        return;
    }

    let validacion = validator.isValid(creditCardNumber);
    if (validacion) {
        document.getElementById("message").textContent = "Su número de tarjeta es válida";
    } else {
        document.getElementById("message").textContent = "Su número de tarjeta NO es válida";
    }

    let enmascarar = validator.maskify(creditCardNumber);
    document.getElementById("cNumber").value = enmascarar;

});