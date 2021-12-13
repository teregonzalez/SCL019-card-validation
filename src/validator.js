const validator = { //Se crea objeto validator

  isValid(creditCardNumber){
    if(creditCardNumber.length < 1) return false;// no permite que este vacio
    let numberArray = creditCardNumber.split(''); //Convertimos el numero de la tarjeta a un array
   console.log(numberArray); //Mostramos el array que se creo del numero de tarjeta
  //let 
  }
  }//
  export default validator;