const validator = { //Se crea objeto validator
  

  isValid(creditCardNumber){
 
   let numberArray = creditCardNumber.split('');
  
   for(let i= 0; i < numberArray.length; i++){ 
     if (i % 2 === 0) {
         numberArray[i] = numberArray[i] * 2;
         if ( numberArray[i] >= 10) { 
          numberArray[i] = String(numberArray[i])
       .split("")
        .map(Number)
         .reduce(function (a, b){
        return a + b
      });
    }
  }
  else{
    numberArray[i] = numberArray[i] * 1;
}
   }
let valid = numberArray.reduce(function (a, b) {
  return a + b;
  }); 
  if (valid % 10 == 0) {
    //tarjeta valida
    console.log("es valido");
    return true;
  } else {
    //tarjeta invalida
    console.log("No es valido");
    return false;
  }

}

,  
maskify(creditCardNumber)  {
  return creditCardNumber.slice(0,-4).replace(/./g, "#") + creditCardNumber.slice(-4);
//reemplaza los numeros de la tarjeta desde la posicion 0 a la -4 por #
    //Y solo muestra los ultimos cuatro numeros
  }           


    
 };    

export default validator;