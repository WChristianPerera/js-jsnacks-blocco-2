// 3) snack 2.3
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari



const myArray = [1,2,3,4,5,6,7,8,9,];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    if( i % 2 !== 0){
        sum += myArray[i];
    }
}

console.log("La somma dei numeri in posizione dispari è:" + sum);