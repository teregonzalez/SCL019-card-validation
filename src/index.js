import validator from './validator.js';

var btn = document.querySelector('button');

btn.addEventListener('click', () => {
 var creditCardNumber = document.getElementById('cNumber').value;
 console.log(creditCardNumber);
 //alert(creditCardNumber);

});


//validator.isValid(creditCardNumber){

//}



//function maskify(creditCardNumber) {
//  return creditCardNumber.slice(0,-4).replace(/./g, "#") + creditCardNumber.slice(-4);
  //returna el numero de la tarjeta desde la posicion 0 a la -4
  //Y reemplaza todos los caracteres por #
//}

//const arry = [3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 8, 9];
//const reversed = arry.reverse();
//console.log(reversed);