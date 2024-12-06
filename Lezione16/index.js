/*
function User(firstname, lastname, age) {
    // console.log(this);
    
    if(!firstname) {
        throw new Error('il firstname non può essere vuoto');
    }
    this.firstname = firstname;

    if(!lastname) {
        throw new Error('il lastname non può essere vuoto');
    }
    this.lastname = lastname;

    if(age < 0) {
        throw new Error('età non valida');
    }
    this.age = age;
}



try {
    const eric = new User('Eric', 'Cartman', -10);
    console.log(eric);
} catch(ugo) {
    alert(ugo.message);
}
*/




// [0, 1) * 9 + 1 = [1, 10)



// function sum(x, y) {
//     return new Promise((resolve, reject) => {
//         resolve(x + y);
//     })
// }

/*
async function sum(x, y) {
    return x + y;
}

function print(msg) {
    return new Promise((resolve, reject) => {
        console.log(msg);
        
        resolve();
    })
}



async function main() {

    let result = await sum(5, 3);
    console.log(result);
}

main()
    .then(() => {
    })
    .catch((error) => {
        console.log(error);
    });
*/


document.addEventListener('DOMContentLoaded', () => {

    const firstnameInput = document.getElementById('firstnameInput');
    const lastnameInput = document.getElementById('lastnameInput');
    const ageInput = document.getElementById('ageInput');
    
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const newUser = {
            firstname: firstnameInput.value,
            lastname: lastnameInput.value,
            age: Number(ageInput.value)
        };
    
        const request = new Request('http://dms.cyberdelia.eu/api/v1/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        
        try {
            const response = await fetch(request)
            if(response.status != 201) {
                throw new Error('il server nn ha creato la risorsa');
            }
    
            const responseBody = await response.json();
            console.log(responseBody);
    
            window.location.assign(`/user.html?id=${responseBody.id}`)
        } catch(e) {
            // errore lato client
            console.log(error);
        }
    });
});



