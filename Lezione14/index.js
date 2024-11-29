
/*
function sumNaturals(x, y) {
    if(x < 0) {
        console.log('x non può essere minore di zero');
        return -1;
    }

    if(y < 0) {
        console.log('y non può essere minore di zero');
        return -2;
    }
    
    return x + y;
}


let a = 5;
let b = -3;
let result = sumNaturals(a, b);
console.log(result);
*/

/*
function User(firstname, lastname, age) {

    if(age < 0) {
        throw new Error('età non valida');
    }

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

let eric = new User('Eric', 'Cartman', -3);
console.log(eric);
*/


// let err = new Error('età non valida');
// throw err;

/*
console.log('inizio');

try {
    console.log('sono nel try');

    let x = 5;
    let y = 0;

    if(y == 0) {
        throw new Error('il divisore non può essere zero');
    }

    let result = x / y;
    console.log(result);

} catch(err) {
    console.log('sono nel catch', err.message);
}

console.log('fine');
*/


/*
function sumNaturals(x, y) {
    if(x < 0) {
        throw new Error('x non può essere minore di zero');
    }

    if(y < 0) {
        throw new Error('y non può essere minore di zero');
    }
    
    return x + y;
}

function doubleNaturals(n) {
    let z = sumNaturals(n, n);
    return z;
}

console.log('inizio');

try {
    let result = doubleNaturals(-5);
    console.log(result);
} catch(err) {
    console.log(err.message);
}

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
async function sumNaturals(x, y) {
    
    if(x < 0) {
        throw new Error('x non può essere minore di zero'); // reject('x non può essere minore di zero');
    }

    if(y < 0) {
        throw new Error('y non può essere minore di zero'); // reject('y non può essere minore di zero');
    }
    
    let z = x + y;
    return z;  // resolve(z);
}

async function print(msg) {
    console.log(msg);
    return;     // resolve();
}

async function sumNaturalsAndPrint(x, y) {
    let result = await sumNaturals(x, y);
    await print(result);
}

console.log('inizio');

sumNaturalsAndPrint(-3, 2)
    .then(function() {
        console.log('sono nel then di tutto');
    })
    .catch(function(error) {
        console.log('sono nel catch', error.message);
    });

console.log('fine');
*/


async function loadPosts() {
    let response = await fetch('http://dms.cyberdelia.eu/api/v1/post');
    console.log(response);
    
    if(response.status != 200) {
        throw new Error('risorsa non trovata');
    }

    let data = await response.json();
    return data;    // resolve(data)
}

loadPosts()
    .then((data) => {
        console.log('sono nel then', data);
    })
    .catch((error) => {
        console.log(error.message);
    });

