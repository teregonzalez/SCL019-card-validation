import validator from './validator.js';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    
    const creditCardNumber = document.getElementById('cNumber').value;
    let selectBank = document.getElementById("select-example").selectedIndex;
    let nameComple = document.getElementById('Ingrese-Nombre').value;
    let dateExp = document.getElementById('eNumber').value;
    let numberCvv = document.getElementById('cvv').value;
    let boxCard= document.getElementsByClassName('cuboxValid');
    

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
    
    let enmascarar = validator.maskify(creditCardNumber);
    document.getElementById("cNumber").value = enmascarar;

  for(let i= 0; i < boxCard.length; i++){
     if (validacion) {
        boxCard[i].style.display = 'block'; 
        document.getElementById("message").innerText = "Su número de tarjeta " + enmascarar + " es válida";
     } else {
        boxCard[i].style.display = 'block';
        document.getElementById("message").innerText = "Su número de tarjeta " + enmascarar +  " NO es válida";
     }
    }
    
       
    
});


let limpiar = document.getElementById('reset');

limpiar.addEventListener('click', () => {

    let numTarget= document.getElementById('cNumber');
    let cleanBox= document.getElementsByClassName('cuboxValid');
    numTarget.value='';
  
    for (let i= 0; i < cleanBox.length; i++) {
        cleanBox[i].style.display='none';
    }
});