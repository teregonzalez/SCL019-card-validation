const validator = { //Se crea objeto validator
  
  isValid(creditCardNumber){
     let numberArray = creditCardNumber.split(''); //Convertimos el numero de la tarjeta a un array
   console.log(numberArray);//Mostramos el array que se creo del numero de tarjeta

   let posicionPar = 0;
   //let arrayPar = 0;
   for(let i = 0; i < numberArray.length; i++){ 
    let listArr = numberArray[i];
    console.log(listArr);
    let numberPar = i + 1;
    console.log(numberPar);
  if(numberPar % 2 === 0){
    
  }} 


  // let listNumber = 0;
  // for(let i = 0; i < numberArray.length; i++){ 
    // 
    //let numberPar= i + 2;
     //alert(numberPar);
    // if(numberPar % 2 === 0)
       //const numMultiplicar=numberPar * 2
     //console.log(numMultiplicar);
   
  }

  //maskify(creditCardNumber) {
    //return creditCardNumber.slice(0,-4).replace(/./g, "#") + creditCardNumber.slice(-4);
      //reemplaza los numeros de la tarjeta desde la posicion 0 a la -4 por #
      //Y solo muestra los ultimos cuatro numeros
    }
    
    
  
  
  export default validator;