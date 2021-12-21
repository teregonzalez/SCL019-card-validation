import validator from './validator.js';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

  const creditCardNumber = document.getElementById('cNumber').value;
  let selectBank = document.getElementById("select-example").selectedIndex;
  let nameComple = document.getElementById('Ingrese-Nombre').value;
  let dateExp = document.getElementById('eNumber').value;
  let numberCvv = document.getElementById('cvv').value;
  
  
  if( selectBank == null || selectBank == 0 ) {
    return false;
  }
  
if (nameComple.length == ""){
  alert("Ingrese su Nombre y Apellido");
  return;
}

if(dateExp.length == ""){
  alert("Ingrese fecha de Expiración");
  return;
}

if (numberCvv.length == ""){
  alert("Ingrese número secreto");
  return;
}

if(creditCardNumber.length == ""){
  alert("Ingrese número de tarjeta ");
  return;
}
   let validacion = validator.isValid(creditCardNumber);
   if (validacion === true){
   document.getElementById("message").innerHTML="Su número de tarjeta es Válida";
  }
   else { 
    document.getElementById("message").innerHTML="Su número de tarjeta NO es Válida";
   }


   let enmascarar = validator.maskify(creditCardNumber);
 document.getElementById("cNumber").value = enmascarar;

});
