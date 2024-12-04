/*
window.setTimeout(() => {
    window.location.assign('https://www.wikipedia.org/');
}, 5000);
*/

/*
window.setInterval(() => {

    console.log('refresh in cos');
    window.location.reload();
    
}, 5000);
*/


/*
const rawQuery = window.location.search;
const query = new URLSearchParams(rawQuery);
const id = query.get('id');
console.log(id);
*/

/*
let index = 1;
const container = document.getElementById('container');
const loadMore = document.getElementById('loadMore');

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function createSquare() {
    const square = document.createElement('p');
    square.classList.add('square');
    square.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
    square.textContent = index;
    container.appendChild(square);

    index++;
}

function fetchData() {
    for(let i=0; i < 10; i++) {
        createSquare();
    }
}

fetchData();

const observer = new IntersectionObserver((entries) => {

    if(!entries.length) {
        return;
    }

    if(entries[0].intersectionRatio <= 0) {
        return;
    }

    fetchData();
});

observer.observe(loadMore);
*/



console.log('inizio');

localStorage.setItem('firstname', 'Ugo');
// const firstname = localStorage.getItem('firstname');
// console.log(firstname);

// const user = {
//     firstname: 'Eric',
//     lastname: 'Cartman',
//     age: 10
// };
// localStorage.setItem('user', JSON.stringify(user));

// const userRaw = localStorage.getItem('user');
// const user = JSON.parse(userRaw);
// console.log(user);

console.log('fine');