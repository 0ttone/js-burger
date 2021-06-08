//Il programma dovrà consentire di calcolare il prezzo del panino 
//selezionando o deselezionando gli ingredienti proposti.


//variabile da assegnare al bottone che aggiunge checkbox collegati a prezzo e prodotto
var sumIngredientPrice = document.getElementById('addIngredientPrice');

//variabile che restituirà il totale finale
var sumPrice = document.getElementById('sumPrice');

//IMPORTANTISSIMO -questa VAR di partenza a 0 se lasciata FUORI manterrà tutti 
//i click in somma per via del += finale ->portandola DENTRO la funzione click ad
// ciclo si azzererà che è il modo giusto di funzionare - resta qui commentata
//var sumPriceInt = 0;

//creo funzione che attiva eventi all atto del click del bottone
sumIngredientPrice.addEventListener('click', function (){
      //era FUORI e non avrebbe funzionato
      var sumPriceInt = 0;
      
      //variabile che definisce tutti gli elementi /ingredienti
      var sumIngredients = document.getElementsByClassName('ingredients');

      //con il for percorro il contenuto dell array ingredients e ne 
      //verifico lo stato checked, se true (che è default) lo sommo
      //parseInt è INDISPENSABILE perchè value è SEMPRE stringa
      for (var i = 0; i < sumIngredients.length; i++){
            if (sumIngredients[i].checked){
                  sumPriceInt += parseInt(sumIngredients[i].value)
            
                  console.log(sumPriceInt)
            }
      
      }
      //sommo e stampo nell HTML (fuori dal ciclo for)
      sumPrice.innerHTML = 'il risultato è ' + sumPriceInt;


      //porzione sconto variabile sconto inserita
      var discountInputCode = document.getElementById('discount')
      
      //codice sconto valido
      var discountCode = "9999";
      // percentuale sconto
      var discountPerc = 20;

      //verifica validità sconto ovvero input uguale discountInputCode

      if(discountInputCode.value === discountCode){
            discountVal = sumPriceInt / 100 * discountPerc ;
            sumPriceInt -= discountVal
            console.log()
      
            sumPrice.innerHTML = sumPriceInt
      
      }


      // sumPrice.innerHTML = sumPriceInt

})
