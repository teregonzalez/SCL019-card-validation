const validator = { //Se crea objeto validator
  
  isValid(creditCardNumber){
     let numberArray = creditCardNumber.split(''); //Convertimos el numero de la tarjeta a un array
     console.log(numberArray);//Mostramos el array que se creo del numero de tarjeta

   let positionPar = 0;
   for(let i= 0; i < numberArray.length; i++){
     let positionPar= i + 2;
     if(positionPar % 2 === 0){
       let numMultiplicar = numberArray[i] * 2;
       console.log(numMultiplicar)}
  } 
}
}
export default validator;
//numberArray[i];
//console.log(listArr);
//let positionPar = i;
//console.log(positionPar);
  
  //maskify(creditCardNumber) {
    //return creditCardNumber.slice(0,-4).replace(/./g, "#") + creditCardNumber.slice(-4);
      //reemplaza los numeros de la tarjeta desde la posicion 0 a la -4 por #
      //Y solo muestra los ultimos cuatro numeros