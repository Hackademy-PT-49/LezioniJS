/*
// 1) dichiarazione di una funzione
function sayHello() {
    console.log('ciao');
    return;
}

// 2) invocare (o chiamare) la funzione più e più volte
sayHello();
sayHello();
sayHello();
*/

/*
// 1) dichiarazione di una funzione
function saySomething(message, num) {
    console.log(`ti dico che ${message} ${num} volte`);
    return;
}

// 2) invocare (o chiamare) la funzione più e più volte
saySomething('ciaone', 3);
saySomething('goodbye', 1);
*/


/*
// 1) dichiarazione di una funzione
function sum(x, y) {
    let z = x + y;
    return z;
}

console.log('inizio');

let result1;
result1 = sum(5, 3);     // 2) invocare (o chiamare) la funzione più e più volte
console.log(result1);

let result2;
result2 = sum(2, 2);     // 2) invocare (o chiamare) la funzione più e più volte
console.log(result2);

console.log('fine');
*/

// var n = num;

/*
function double(n) {
    n = 2 * n;
    return n;
}


console.log('inizio');

let num = 5;    // dopo aver chiamato la funzione, num vale 5 oppure 10 ???

let result = double(num);     // 2) invocare (o chiamare) la funzione più e più volte
console.log(result);

console.log('num vale', num);


console.log('fine');

*/

/*
// var array = prices;

function double(array) {
    array[0] = 99;
}

console.log('inizio');

let prices = [5, 3, 2];
double(prices);     
console.log(prices)
*/


/*
var x = 5;
var y;

// 1) dichiarazione di una funzione
function sum(x = 0, y = 0) {    // parametri con valori di default

    console.log('sono dentro la funzione', x, y);
    
    let z = x + y;
    return z;
}

console.log('inizio');

let result = sum();     // 2) invocare (o chiamare) la funzione più e più volte
console.log(result);

console.log('fine');
*/

/*
// 1) dichiarazione di una funzione
function saySomething(message = '') {
    console.log(message);
}

// 2) invocare (o chiamare) la funzione più e più volte
saySomething();
*/


let x = 5;  // variabile globale



function double() {
    console.log('sono dentro la funzione e x vale', x);
}


double();

console.log('x all esterno della funzione e dopo aver chiamarto la funzione vale', x); // ERRORE



