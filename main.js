

let scelta;

do {
   scelta = Number(prompt(`inserisci il numero corrispondente alla bevanda desiderata: \n 1- Acqua, \n 2 - coca cola, \n 3 - birra`));
   
   switch (scelta) {
      case 1:
         console.log(`è stata selezionata l'acqua`);
         break;

      case 2:
         console.log('è stata selezionata la coca cola');
         break;

      case 3:
         console.log('è stata selezionata la birra');
          break;

      default:
         console.log('scelta non valida, riprova');
         
   }
} while (scelta < 1 || scelta > 3 );

 
 