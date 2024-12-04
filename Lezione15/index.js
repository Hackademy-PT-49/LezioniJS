


// window.setTimeout(() => {
    // window.location.assign('https://www.wikipedia.org/');
// }, 5000);


/*
window.setInterval(() => {

    console.log('refresh in cos');
    window.location.reload();
    
}, 5000);
*/


const rawQuery = window.location.search;

const query = new URLSearchParams(rawQuery);
const id = query.get('id');
console.log(id);

