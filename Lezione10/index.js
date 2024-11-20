


/*
const paraBello = document.getElementById('paraBello');
const div = paraBello.parentElement;
const body = document.body;

body.addEventListener('click', function(event) {
    console.log('body cliccato');
});

div.addEventListener('click', function(event) {
    
    console.log('div cliccato');
});

paraBello.addEventListener('click', function(event) {
    // event.stopPropagation();

    console.log('paragrafo cliccato');
});
*/

/*
const link = document.getElementById('link');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log('il link è stato cliccato');
});
*/

/*
// <input id="firstnameInput" type="text" placeholder="insersci il tuo nome">
const firstnameInput = document.getElementById('firstnameInput');
firstnameInput.addEventListener('input', function(event) {
    console.log(firstnameInput.value);
});
*/

/*
<form id="signUpForm">
    <input id="firstnameInput" type="text" placeholder="insersci il tuo nome">
    <input id="lastnameInput" type="text" placeholder="insersci il tuo cognome">

    <button type="submit">iscriviti</button>
</form>
const firstnameInput = document.getElementById('firstnameInput');
const lastnameInput = document.getElementById('lastnameInput');
const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log(firstnameInput.value);
    console.log(lastnameInput.value);
});
*/

/*
const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');

const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let todoItem = document.createElement('li');
    todoItem.textContent = todoInput.value;
    todoList.appendChild(todoItem);

    todoInput.value = '';
});
*/


/*
console.error('ciao');
console.warn('ciao');
console.info('ciao');
console.log('ciao');
console.trace('ciao');
*/

// window.document

// window.alert('ciao');

// const name = window.prompt('inserisci un nome');
// console.log(name);

/*
const handlerId = window.setTimeout(function() {
    console.log('ciao dal timeout');
}, 5000);

window.clearTimeout(handlerId);
*/

/*
const handlerId = window.setInterval(function() {
    console.log('ciao dal interval');
}, 5000);

window.clearInterval(handlerId);
*/


let i = 10;

const handlerId = window.setInterval(function() {

    if(i == 0) {
        window.clearInterval(handlerId);
    }

    console.log(i);
    i--;

}, 1000);