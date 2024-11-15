/*
// dichiarare
function forEach(array, callbackFunction) {
    for(let i=0; i<array.length; i++) {
        callbackFunction(array[i]);
    }
}

// chiamare la funzione forEach (utilizzando)
let nums = [5, 3, 2, 99];
forEach(nums, function(value) {
    console.log('sono dentro la funzione di callback', value);
});
*/

/*
function map(array, callbackFunction) {
    let newArray = [];

    for(let i=0; i<array.length; i++) {
        let newValue = callbackFunction(array[i]);
        newArray.push(newValue);
    }

    return newArray;
}

let nums = [5, 3, 2, 99];
let numsRaddoppiato = map(nums, function(value) {
    return value * 2;
});
console.log(numsRaddoppiato);
*/

/*
let ericFirstname = 'Eric';
let ericLastname = 'Cartman';
let ericAge = 10;

let printEricFullname = function() {
    console.log(`${ericFirstname} ${ericLastname}`);
}

printEricFullname();
*/

// let arr = new Array();
// console.log(arr);


// let arr = [];
// console.log(arr);


// full notation
// let eric = new Object();
// console.log(eric);

// short notation
// let eric = {};
// console.log(eric);


/*
let eric = new Object();

eric.firstname = 'Eric';       // dot notation
eric.lastname = 'Cartman';
eric.age = 10;
eric.printFullname = function() {
    console.log(`${eric.firstname} ${eric.lastname}`);
};

eric.printFullname();
*/

/*
// object literal
let eric = {
    firstname: 'Eric',
    lastname: 'Cartman',
    age: 10,
    printFullname: function() {
        console.log(`${this.firstname} ${this.lastname}`);
    },
};

eric.printFullname();
*/



/*
function printFullname(THIS) {
    console.log(`${THIS.firstname} ${THIS.lastname}`);
}

printFullname(eric);
*/





/*
function User(nome, cognome, eta) {
    // let user = new Object();

    this.firstname = nome;       // dot notation
    this.lastname = cognome;
    this.age = eta;
    this.printFullname = function() {
        console.log(`${this.firstname} ${this.lastname} avente età ${this.age}`);
    };

    // return user;
}

let eric = new User('Eric', 'Cartman', 10);
console.log(eric);
// eric.printFullname();

let stan = new User('Stan', 'Marsh', 9);
console.log(stan);
// stan.printFullname();
*/

/*
let arr = new Array();
arr.push(5);
arr.push(3);
console.log(arr.length);
*/

/*
let sum = function(x, y) {
    return x + y;
};

let sum = new Function('x', 'y', 'return x + y');

let a = 5;
let b = 3;
let result = sum(a, b);
console.log(result);
*/

/*
// let msg = new String('ciao');
// console.log(msg.length);

let msg = 'ciao';   // string
msg = new String(msg);  // String
console.log(msg.length);
*/






/*
function User(nome, cognome, eta) {
    // let user = new Object();

    this.firstname = nome;       // dot notation
    this.lastname = cognome;
    this.age = eta;
    this.printFullname = function() {
        console.log(`${this.firstname} ${this.lastname} avente età ${this.age}`);
    };

    // return user;
}

let eric = new User('Eric', 'Cartman', 10);
console.log(eric);
// eric.printFullname();
*/


/*


*/


function sum(x, y) {
    console.log(this);
    
    return x + y;
}

// main
let a = 5;
let b = 3;
let result = window.sum(a, b);
console.log(result);