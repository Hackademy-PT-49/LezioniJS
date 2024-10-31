/*
let x = true;

console.log(x);
console.log(typeof x);  // data type check
*/

/*
let firstname = 'Eric';
let lastname = "Cartman";
let age = 10;

// template string - concatenzione
// placeholder ${}
// let fullname = firstname + ' ' + lastname + ' di anni ' + age;
let fullname = `${lastname} ${age} di anni ${firstname}`;
console.log(fullname);
*/


/*
let prices;
prices = [5, 10, 3];    // riferimento
console.log(prices);

prices[5] = 99;
console.log(prices[5]);

// prices[0] = 99;
// console.log(prices[0]);
*/



// let days = ['lunedi', 'martedi'];
// console.log(days[0]);

/*
let x = 3;

let y;
y = x;

y = 99;

console.log(x); // ???
*/


// let prices;
// prices = [5, 10, 3];

// let prezzi;
// prezzi = prices;    // shallow copy 

// prezzi[0] = 99;

// console.log(prices[0]);     // ?????


//console.log(prices.length);


/*
let firstname = prompt('insersci il tuo nome'); // output + input
let lastname = prompt('insersci il tuo cognome'); // output + input

alert(`ciao, ${firstname} ${lastname}`);    // output
*/

/*
// conversione di tipo
let x = parseFloat(prompt('insersci il primo numero'));
let y = parseFloat(prompt('insersci il secondo numero'));

let z = x + y;

alert('la somma dei due numeri è ' + z);
*/


/*
let age = 10;   // 10 number -> '10' string
let firstname = 'Eric';     // 'Eric' string -> ??? number

let msg = age + firstname;

console.log(msg);
*/

/*
let age = 10; 
let firstname = 'ciao';     // '25' string -> ??? number

let msg = age + age + firstname;

console.log(msg);
*/


/*
let x = 3;

// operatori di assegnamento composti
x = x + 1;
x += 1;

x = x - 1;
x -= 1;

x = x * 2;
x *= 2;
*/

/*
let x = 3;
let y;

x++;
y = x;

console.log(x);
console.log(y);
*/





let prices = [5, 10, 3];
console.log(prices);

let i = 0;
let sum = 0;

//sum = prices[0] + prices[1] + prices[2];

sum = sum + prices[i];
i++;

sum = sum + prices[i];
i++;

sum = sum + prices[i];
i++;

console.log(sum);

