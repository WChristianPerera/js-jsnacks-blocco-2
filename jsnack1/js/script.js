// 1) snack 1.5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.




const myArray = [];
for (i = 0; i < 6; i++) {
    let number = prompt(parseInt('Dimmi un numero ?'));
    if( number % 2 == !0){
        myArray.push(number);
    }
}

console.log(myArray);
