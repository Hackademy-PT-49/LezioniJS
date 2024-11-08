/*
function generateAutoveloxMessage(speed, plate) {

    if(speed < 130 || plate == 'AA123ZZ') {
        return 'limite rispettato';
    }
    
    if(speed < 160) {
        return `multa 100 euro al proprietario del veicolo targato ${plate}`;
    }
    
    if(speed < 200) {
        return `multa 500 euro al proprietario del veicolo targato ${plate}`;
    }
    
    return `ritiro della patente al proprietario del veicolo targato ${plate}`;;
}


let speed = 170;
// let targaDiQualcuno = 'CC123GG';
let plate = 'AA123ZZ';

let result = generateAutoveloxMessage(speed, plate);
console.log(result);
*/


/*
// dichiarazione di una funzione anonima ES5
let sum = function(x, y) {
    let z = x + y;
    return z;
};

let somma = sum;

let a = 5;
let b = 2;
let result = somma(a, b); // chiamata (o invocazione) della funzione
console.log(result);
*/

// dichiarazione di una funzione anonima ES6 - detta anche arrow function
/*
let sum = (x, y) => {
    return x + y;
};
*/

/*
let sum = (x, y) => x + y;

let a = 5;
let b = 2;
let result = sum(a, b); // chiamata (o invocazione) della funzione
console.log(result);
*/

/*
let double = x => {
    return 2 * x;
}

let a = 5;
let result = double(a); // chiamata (o invocazione) della funzione
console.log(result);
*/

/*
let double = x => 2 * x;

let a = 5;
let result = double(a); // chiamata (o invocazione) della funzione
console.log(result);
*/

/*
function sum(x, y, callback) {
    let z = x + y;
    
    callback(z);
}

let a = 5;
let b = 2;
sum(a, b, function(result) {
    console.log(result);

    // ...
});
*/


/*
function generateFullname(firstname, lastname, callback) {
    callback(`${firstname} ${lastname}`);
}

generateFullname('eric', 'cartman', function(fullname) {
    console.log('sono dentro la funzione di callback', fullname);
});
*/




// let roles = ['difensore', 'centro1', 'centro2'];

// roles.push('attaccante');
// let removedRole = roles.pop();
// console.log('removedRole', removedRole);

// let removedRole = roles.shift();
// console.log('removedRole', removedRole);
// roles.unshift('portiere');


// let roles = ['portiere', 'difensore', 'centro', 'centro', 'centro', 'attaccante'];

// roles.slice(startIndexIncluded, endIndexExcluded)
// let noHands = roles.slice(1, 3);
// console.log(noHands);

// roles.splice(startIndexIncluded, deleteCount, itemToAdd1, itemToAdd2, ...)
// roles.splice(1, 1, 'raccattapalle', 'arbitro');

// let outRoles = ['raccattapalle', 'arbitro'];

// let allRoles = roles.concat(outRoles);
// console.log(allRoles);

// roles.reverse();
// console.log(roles);

// let rolesJoined = roles.join(' - ');
// console.log(rolesJoined);

// let isDifensoreIncluded = roles.includes('difensore');
// console.log(isDifensoreIncluded);

// let primoCentroIndex = roles.indexOf('centro');
// console.log(primoCentroIndex);

// let secondoCentroIndex = roles.lastIndexOf('centro');
// console.log(secondoCentroIndex);

// console.log(roles.length);


/*
function lastIndexOfFemke(array, searchedValue) {
    let foundIndexes = [];

    for(let i = array.length - 1; i >= 0; i--) {
        if(array[i] == searchedValue) {
            foundIndexes.push(i);
        }
    }

    return foundIndexes;
}

let roles = ['portiere', 'difensore', 'centro', 'centro', 'centro', 'attaccante'];
let indexes = lastIndexOfFemke(roles, 'centro');
console.log(indexes);
*/


function lastIndexOfCustom(array, searchedValue) {

    for(let i = array.length - 1; i >= 0; i--) {
        if(array[i] == searchedValue) {
            return i;
        }
    }

    return -1;
}

let roles = ['portiere', 'difensore', 'centro', 'centro', 'centro', 'attaccante'];
let lastIndexOfCentro = lastIndexOfCustom(roles, 'centro');
console.log(lastIndexOfCentro);






