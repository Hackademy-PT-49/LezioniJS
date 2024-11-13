/*
let arr = [5, 3, 2, 99];
arr.forEach(function(value, index, array) {
    console.log(value, index, array);
});
*/

/*
let arr = [5, 3, 2, 99];

arr.forEach((value) => {
    console.log(value);
});
*/

/*
let prices = [5, 3, 10, 99];

// corrispondenza tra elementi di 2 array
let discountedPrices = prices.map((value) => {
    return value * 0.5;
});

console.log(discountedPrices);
*/


/*
let prices = [5, 30, 10, 99, 2];

let lessOrEqualTenEuros = prices.filter((price) => {
    return price <= 10;
});

console.log(lessOrEqualTenEuros);
*/

/*
let prices = [30, 7, 15, 2, 5, 99];

let priceFound = prices.find((value) => {
    return value <= 10;
});

console.log(priceFound);
*/

/*
let prices = [30, 7, 15, 2, 5, 99];

let priceIndexFound = prices.findIndex((value) => {
    return value <= 10;
});

console.log(priceIndexFound);
*/

/*
let prices = [30, 2, 15, 5];

let sum = prices.reduce((accumulator, value) => {
    console.log(accumulator, value);
    return accumulator + value;
});

console.log(sum);
*/

/*
let nums = [30, 2, 15, 5];

* left = 2, right = 15
* 
* ritorno un numero qualsiasi < 0 per ottere l'array ordinato come -> [..., left, ..., right, ...]
* ritorno un numero qualsiasi > 0 per ottere l'array ordinato come -> [..., right, ..., left, ...]
nums.sort((left, right) => {
    return left - right;
});

console.log(nums);
 */

/*
let msgs = ['ciao', 'zuzzurellone', 'mamma', 'a', 'ciccio'];
msgs.sort((left, right) => {
    // DA PROVARE tramite console log oppure debugger !!!!
    // console.log(left, right, left.length - right.length);
    
    return left.length - right.length;
});
console.log(msgs);
*/





// traccia 2 con filter


/*
// tre modi diversi di dichiarare una funzione:

function saySomething(msg) {
    console.log(msg);
}

let saySomething = function(msg) {
    console.log(msg);
};

let saySomething = (msg) => {
    console.log(msg);
};

saySomething('ciao');
*/


/*
Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:

Esempio:

Input: a = [3, 5, 10, 2, 8]
Output: media = 5.6, valori minori = [3, 5, 2]


Variante: Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.
*/

/*
let nums = [3, 5, 10, 2, 8];

let sum = 0;
for(let i=0; i<nums.length; i++) {
    sum = sum + nums[i];
}

let average = sum / nums.length;
console.log(`media = ${average}`);

let lessThenAverages = [];
for(let i=0; i<nums.length; i++) {
    if(nums[i] < average) {
        lessThenAverages.push(nums[i]);
    }
}
console.log(`valori minori = [${lessThenAverages}]`);
console.log(`sono presenti ${lessThenAverages.length} numeri minori della media e ${nums.length - lessThenAverages.length} numeri maggiori della media`);
*/


let nums = [3, 5, 10, 2, 8];

let sum = nums.reduce((partial, num) => {
    return partial + num;
}, 0);

let average = sum / nums.length;
console.log(`media = ${average}`);

let lessThenAverages = nums.filter((num) => {
    return num < average;
});

console.log(`valori minori = [${lessThenAverages}]`);
console.log(`sono presenti ${lessThenAverages.length} numeri minori della media e ${nums.length - lessThenAverages.length} numeri maggiori della media`);

