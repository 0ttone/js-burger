var sumIngredientPrice = document.getElementById('addIngredientPrice');
var sumPrice = document.getElementById('sumPrice');

//IMPORTANTISSIMO -questa VAR di partenza a 0 se lasciata FUORI manterrà tutti 
//i click in somma per via del += finale ->portandola DENTRO la funzione click ad
// ciclo si azzererà che è il modo giusto di funzionare - resta qui commentata
//var sumPriceInt = 0;


sumIngredientPrice.addEventListener('click', function (){
      var sumPriceInt = 0;
      var sumIngredients = document.getElementsByClassName('ingredients');

      for (var i = 0; i < sumIngredients.length; i++){
            if (sumIngredients[i].checked){
                  sumPriceInt += parseInt(sumIngredients[i].value)
            
                  console.log(sumPriceInt)
            }
      
      }

      sumPrice.innerHTML = 'il risultato è ' + sumPriceInt;

})
