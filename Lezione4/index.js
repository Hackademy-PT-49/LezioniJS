/*
console.log('inizio');

let i = 1;

// console.log(i);
// i++;

// console.log(i);
// i++;

// console.log(i);
// i++;

// console.log(i);
// i++;

...

while(i <= 4) {
    console.log('ciao');
    i++;
}

console.log('fine');
*/


/*
console.log('inizio');

let prices = [5, 3];

console.log(prices);

let i = 0;
let total = 0;
while(i < prices.length) {
    total = total + prices[i];
    i++;
}
console.log(total);

console.log('fine');
*/


/*
console.log('inizio');

let age;
do {
    age = parseInt(prompt('inserisci la tua età'));

    if(age < 0) {
        alert('hai inserito una età negativa')
    } else if(age >= 140) {
        alert('seeeee vedi a questo')
    }
} while(age < 0 || age >= 140);

alert(`hai ${age} anni`);

console.log('fine');
*/

/*
console.log('inizio');

let i = 1;          // 1) dichiarazione e inizializzazione di una variabile (utile a definire la condizione)
while(i <= 10) {    // 2) valutazione della condizione
    console.log(i);

    i++;            // 3) modifica del valore della variabile (utile a definire la condizione)
}

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('fine');
*/


/*
console.log('inizio');

// scontrino con array
let prices = [];
let i = 0;

let answer;
do {
    answer = prompt('hai un prezzo da inserire? (y/n)');
    if(answer == 'y') {
        let priceInput;

        // controllo che il prezzo sia valido
        do {
            priceInput = parseFloat(prompt('insersci il prezzo'));
            if(priceInput < 0) {
                alert('il prezzo non può essere negativo...');
            }
        } while(priceInput < 0);

        prices[i] = priceInput;
        i++;
    }
} while(answer == 'y');



let total = 0;
for(let k = 0; k < prices.length; k++) {
    console.log(`articolo ${k + 1} al prezzo: ${prices[k]} euro`)
    total = total + prices[k];
}
console.log(`totale da pagare: ${total} euro`);

console.log('fine');
*/



/*
console.log('inizio');

// scontrino con array
let i = 0;
let total = 0;

let answer;
do {
    answer = prompt('hai un prezzo da inserire? (y/n)');
    if(answer == 'y') {
        let priceInput;

        // controllo che il prezzo sia valido
        do {
            priceInput = parseFloat(prompt('insersci il prezzo'));
            if(priceInput < 0) {
                alert('il prezzo non può essere negativo...');
            }
        } while(priceInput < 0);

        console.log(`articolo ${i + 1} al prezzo: ${priceInput} euro`);
        total = total + priceInput;
        i++;
    }
} while(answer == 'y');

console.log(`totale da pagare: ${total} euro`);

console.log('fine');
*/


console.log('inizio');


for(let i = 10; i >= 0; i--) {
    switch(i) {
        case 0:
            console.log('lift off');
            break;
        case 3:
            console.log('pronti alla partenza');
            break;
        case 6:
            console.log('motori accesi');
            break;
        default:
            console.log(i);
    }
}


console.log('fine');