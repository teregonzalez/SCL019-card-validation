import validator from './validator.js';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const creditCardNumber = document.getElementById('cNumber').value;
   //console.log(creditCardNumber);

   validator.isValid(creditCardNumber);
   //validator.maskify(creditCardNumber);
});
