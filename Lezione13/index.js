/*
// la funzione executor contiene il task (sincrono o asincrono) da svolgere
let executor = function(resolve, reject) {
    console.log('sono dentro la funzione executor');
    
    if(false) {
        resolve('ciao');
    } else {
        reject('si è verificato un problema');
    }
};


console.log('inizio');

let promise = new Promise(executor);
promise
    .then(function(msg) {
        console.log('sono nel then', msg);
    })
    .catch(function(error) {
        console.log('sono nel catch', error);
    });

console.log('fine');
*/




/*
function sumNaturals(x, y) {
    // la funzione executor contiene il task (sincrono o asincrono) da svolgere
    return new Promise(function(resolve, reject) {

        if(x < 0) {
            reject('x non può essere minore di zero');
            return;
        }

        if(y < 0) {
            reject('y non può essere minore di zero');
            return;
        }

        let z = x + y;
        resolve(z);
    });
}

console.log('inizio');

sumNaturals(3, -2)
    .then(function(result) {
        console.log('sono nel then', result);
    })
    .catch(function(error) {
        console.log('sono nel catch', error);
    });

console.log('fine');
*/

/*
function sumNaturalsAsync(x, y) {
    // la funzione executor contiene il task (sincrono o asincrono) da svolgere
    return new Promise(function(resolve, reject) {

        window.setTimeout(function() {

            if(x < 0) {
                reject('x non può essere minore di zero');
                return;
            }
    
            if(y < 0) {
                reject('y non può essere minore di zero');
                return;
            }
    
            let z = x + y;
            resolve(z);

        }, 2000);
    });
}

console.log('inizio');

sumNaturalsAsync(-3, 2)
    .then(function(result) {
        console.log('sono nel then', result);
    })
    .catch(function(error) {
        console.log('sono nel catch', error);
    });

console.log('fine');
*/


/*
function sumNaturals(x, y) {
    // la funzione executor contiene il task (sincrono o asincrono) da svolgere
    return new Promise(function(resolve, reject) {

        if(x < 0) {
            reject('x non può essere minore di zero');
            return;
        }

        if(y < 0) {
            reject('y non può essere minore di zero');
            return;
        }

        let z = x + y;
        resolve(z);
    });
}

function print(msg) {
    return new Promise(function(resolve, reject) {
        console.log(msg);
        resolve();
    });
}

console.log('inizio');

sumNaturals(3, 2)
    .then(function(result) {

        console.log('sono nel then di sumNaturals');

        // promise chaining
        return print(result);
    })
    .then(function() {
        console.log('sono nel then di print');
    })
    .catch(function(error) {
        console.log('sono nel catch', error);
    });

console.log('fine');
*/






/*
let eric = {
    firstname: 'Eric',
    lastname: 'Cartman',
    age: 10,
    isMale: true
};

// serializzazione cioè convertire un oggetto in string nel formato application/json    javascript object notation
let ericSerialized = JSON.stringify(eric);
console.log(ericSerialized);

// deserializzazione cioè convertire una string nel formato JSON in object
let ericAgain = JSON.parse(ericSerialized);
console.log(ericAgain);
*/

/*
let users = [
    {
        firstname: 'Eric',
        lastname: 'Cartman',
        age: 10
    },
    {
        firstname: 'Stan',
        lastname: 'Marsh',
        age: 10
    },
    {
        firstname: 'Kenny',
        lastname: 'McCormick',
        age: 11
    },
];

let usersSerialized = JSON.stringify(users);
console.log(usersSerialized);

let usersAgain = JSON.parse(usersSerialized);
console.log(usersAgain);
*/

/*
console.log('inizio');

// 'http://dms.cyberdelia.eu/api/v1/user'
fetch('http://dms.cyberdelia.eu/api/v1/post')
    .then(function(response) {

        if(response.status != 200) {
            console.log('risorsa non trovata');
            return;
        }

        // promise chaining
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        // problema lato client
        console.log(error);
    });


console.log('fine');
*/