// 2) snack 2.2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi,
//  e da queste vuole generare una falsa lista di invitati con nome e cognome.



const myArrayName =  [
    'Luca',
    'Andrea',
    'Christian',
    'Daniele',
    'Clarita',
    'Sara',
    'Francesca',
];

const myArraySurname = [
    'Rossi',
    'Esposito',
    'DiLorenzo',
    'Sepe',
    'Warnakulasuriya',
    'Vaccaro',
    'Faciledicevano',
];


let selectedName = myArrayName[Math.floor(Math.random()*myArrayName.length)];
console.log(selectedName)

let selectedSurname = myArraySurname[Math.floor(Math.random()*myArraySurname.length)];
console.log(selectedSurname)

document.getElementById('name').innerHTML = selectedName;
document.getElementById('surname').innerHTML = selectedSurname;
