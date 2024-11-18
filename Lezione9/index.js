// let msgObj = new String('ciao mamma guarda come mi mamma diverto');
// let result = msgObj.length;
// let result = msgObj.toUpperCase();
// let result = msgObj.toLowerCase();

// let result = msgObj.includes('mamma');
// let result = msgObj.startsWith('ciao');
// let result = msgObj.endsWith('i diverto');

// let result = msgObj.indexOf('mamma');
// let result = msgObj.lastIndexOf('mamma');

// let result = msgObj.replace('mamma', 'papà');
// let result = msgObj.replaceAll('mamma', 'papà');

// let msgObj = new String('eric.cartman@gmail.com ');
// let result = msgObj.trim();

// let msgObj = new String('ciao-mamma-guarda-come mi-mamma-diverto');
// let result = msgObj.split('-');
// console.log(result);

// let msg = 'ciao mamma guarda come mi mamma diverto';
// let result = msg.toUpperCase();
// console.log(result);




// let msg = 'ciao mamma guarda come mi mamma diverto';    // string
// let result = msg.toUpperCase(); // string -> String
// console.log(result);



// let msg = 'ciao';
// let x = 3;  // conversione di tipo implicita
// let result = msg + x;
// console.log(result);


// let x = String(3);  // conversione di tipo esplicita
// console.log(x);

// let msg = '32.5';
// let x = Number(msg);    // conversione di tipo esplicita
// console.log(x);
// console.log(typeof x);

/*
let x = Boolean(undefined);    // conversione di tipo esplicita
console.log(x);
console.log(typeof x);

let x = Boolean(null);    // conversione di tipo esplicita
console.log(x);
console.log(typeof x);
*/

/*
valori truthy e falsy
let arr = [];
let x = Boolean(arr.length);    // conversione di tipo esplicita
console.log(x);
console.log(typeof x);
*/

/*
let arr = [];
if(Boolean(arr.length)) {
    console.log('array pieno');
} else {
    console.log('array vuoto');
}
*/

/*
let arr = [];
if(arr.length) {
    console.log('array pieno');
} else {
    console.log('array vuoto');
}
*/

/*
let x = 1;
console.log(x);

if(x) {
    console.log('c è un valore');
} else {
    console.log('non valore');
}
*/

// Come selezionare gli elementi html:

// let paragrafoBello = document.getElementById('paragrafoBello');
// console.log(paragrafoBello);

// let paragraphs = document.getElementsByTagName('p');
// for(let i=0; i<paragraphs.length; i++) {
//     console.log(paragraphs[i]);
// }

// let elements = document.getElementsByClassName('elementoBello');
// for(let i=0; i<elements.length; i++) {
//     console.log(elements[i]);
// }

// let elements = document.querySelectorAll('.elementoBello');
// for(let i=0; i<elements.length; i++) {
//     console.log(elements[i]);
// }

// let element = document.querySelector('.elementoBello');
// console.log(element);


// let container = document.getElementById('container');

// let parent = container.parentElement;
// console.log(parent);

// let containerChildren = container.children;
// console.log(containerChildren);


// let paragraph = document.getElementById('paragrafoBello');
// paragraph.textContent = 'ciao da JS';

// let paragraph = document.getElementById('paragrafoBello');
// paragraph.innerHTML = 'ciao da <strong>JS</strong>';


// let newImgUrl = 'https://www.farmaciecomunalitorino.it/wp-content/uploads/2023/11/Doodle_2023-11-06T13_20_48Z-850x370.png';
// let dogImage = document.getElementById('img-cane');
// console.log(dogImage.getAttribute('src'));
// dogImage.setAttribute('src', newImgUrl);

// let paragraph = document.getElementById('paragrafoBello');
// paragraph.classList.add('red-bg', 'blue-text');
// paragraph.classList.remove('red-bg');
// paragraph.classList.replace('red-bg', 'blue-bg');
// paragraph.classList.toggle('red-bg');

// let paragraph = document.getElementById('paragrafoBello');
// paragraph.style.backgroundColor = '#ff0000';



// let app = document.getElementById('app');
    
// let description = document.createElement('p');
// description.textContent = 'sono stato creato da JS';
// app.appendChild(description);





function generatePost(postData) {

    let post = document.createElement('article');
    post.classList.add('card');
    
    let img = document.createElement('img');
    img.setAttribute('src', postData.imgUrl);
    post.appendChild(img);
    
    let title = document.createElement('h2');
    title.textContent = postData.title;
    post.appendChild(title);
    
    let description = document.createElement('p');
    description.textContent = postData.description;
    post.appendChild(description);

    return post;
}




let app = document.getElementById('app');

let postsDto = [
    {
        imgUrl: 'https://www.farmaciecomunalitorino.it/wp-content/uploads/2023/11/Doodle_2023-11-06T13_20_48Z-850x370.png',
        title: 'Sono andato al mare',
        description: 'E mi sono irritato le piegoline'
    },
    {
        imgUrl: 'https://www.my-personaltrainer.it/2024/07/25/come-fanno-i-cani-a-ritrovare-la-strada-di-casa-orig.jpeg',
        title: 'Le mie orecchie sono diverse',
        description: 'E rimbalzano'
    }
];

postsDto.forEach(function(postDto) {
    let post = generatePost(postDto);
    app.appendChild(post);
});



