import validator from './validator.js';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const creditCardNumber = document.getElementById('cNumber').value
   //console.log(creditCardNumber);
  

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
