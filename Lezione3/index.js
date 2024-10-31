// let x = Math.pow(5, 2);
// console.log(x);

// let x = Math.sqrt(25); 
// console.log(x);

// let x = Math.abs(-5);    // 
// console.log(x);

// let x = Math.min(5, 3, 99, -2);
// console.log(x);

// let x = Math.max(5, 3, 99, -2);
// console.log(x);

// let x = Math.random();  // [0.0, 1.0)
// console.log(x);



// let x = 3.0;
// console.log(Math.ceil(x));
// console.log(Math.round(x));
// console.log(Math.floor(x));


// let y = 3.2;
// console.log(Math.ceil(y));
// console.log(Math.round(y));
// console.log(Math.floor(y));

// let z = 3.7;
// console.log(Math.ceil(z));
// console.log(Math.round(z));
// console.log(Math.floor(z));

// let w = 4.0;
// console.log(Math.ceil(w));
// console.log(Math.round(w));
// console.log(Math.floor(w));




// let x = 5;
// let y = 5;

// let isXGreaterThenY = x > y;
// console.log(isXGreaterThenY);

// let isXGreaterThenOrEqualsY = x >= y;
// console.log(isXGreaterThenOrEqualsY);

// let isXLessThenY = x < y;
// console.log(isXLessThenY);

// let isXLessThenOrEqualsY = x <= y;
// console.log(isXLessThenOrEqualsY);

// let areXAndYEqual = x == y;
// console.log(areXAndYEqual);

// let areXAndYNotEqual = x != y;
// console.log(areXAndYNotEqual);

// let msg = 'ciao';
// let welcome = 'ciao';

// let areNotEqual = msg != welcome;
// console.log(areNotEqual);


// let x = '3'; // string
// let y = 3;  // number

// let areEqual = x === y;
// console.log(areEqual);


/*
let haiLaMacchina = false;
let haiLaBenzina = false;

let puoiViaggiare = haiLaMacchina && haiLaBenzina;
console.log(puoiViaggiare);
*/

/*
let haiEthernet = false;
let haiIlWifi = false;

let puoiNavigare = haiEthernet || haiIlWifi;
console.log(puoiNavigare);
*/

/*
let isSunnyDay = false;

let isUmbrellaRequired = !isSunnyDay;
console.log(isUmbrellaRequired);
*/


/*
console.log('inizio');

let temperature = 38;
console.log('temperatura rilevata ' + temperature);

let msg;
if(temperature >= 37) {
    msg = 'hai la febbre';
} else {
    msg = 'non hai la febbre';
}
console.log(msg);

console.log('fine');
*/



/*
console.log('inizio');

let num = 4;

let msg;
if(num % 2 == 0) {
    msg = `il numero ${num} è pari`;
} else {
    msg = `il numero ${num} è dispari`;
}
console.log(msg);

console.log('fine');
*/

/*
// operatore condizionale
// condizione ? valoreNelCasoTrue : valoreNelCasoFalse

console.log('inizio');

let num = 4;

let msg;
msg = (num % 2 == 0) ? `il numero ${num} è pari` : `il numero ${num} è dispari`;

console.log(msg);

console.log('fine');
*/


/*
// dangling else
console.log('inizio');

let rgb = 'red';

if(rgb == 'red') {
    console.log('che paura');
} else if(rgb == 'green') {
    console.log('che bella la natura');
} else if(rgb == 'blue') {
    console.log('che bello il mare');
} else {
    console.log('non so che dire');
}

console.log('fine');
*/

/*
console.log('inizio');

let rgb = 'red';

switch(rgb) {
    case 'red':
        console.log('che paura 1');
        console.log('che paura 2');
        break;
    case 'green':
        console.log('che bella la natura');
        break;
    case 'blue':
        console.log('che bello il mare');
        break;
    default:
        console.log('non so che dire');
}

console.log('fine');
*/


console.log('inizio');

let temperature = 36.11;

if(temperature < 37) {
    console.log('stai bene');
} else if(temperature < 38) {
    console.log('hai un po di febbricola');
} else if(temperature < 40) {
    console.log('mo te ne vai');
} else {
    console.log('ci vediamo');
}

console.log('fine');