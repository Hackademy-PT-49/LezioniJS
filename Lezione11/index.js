/*
function printFullname(firstname, lastname) {

    console.log(this);
    
    console.log(firstname + ' ' + lastname);
}

printFullname('Eric', 'Cartman');
*/


/*
let eric = {
    firstname: 'Eric',
    lastname: 'Cartman',
    printFullname: function() {

        console.log(this);  // eric

        let getSpace = () => {
            console.log(this);  // ?!?!?!
            return ' ';
        }

        console.log(this.firstname + getSpace() + this.lastname);
    }
};

eric.printFullname();
*/

function createArticle(titleData, descriptionData) {

    const article = document.createElement('article');
    article.classList.add('card');
    // main.appendChild(article);

    const title = document.createElement('h2');
    title.textContent = titleData;
    article.appendChild(title);

    const description = document.createElement('p');
    description.textContent = descriptionData;
    article.appendChild(description);

    const now = new Date();

    const publishedAt = document.createElement('p');
    publishedAt.textContent = `Pubblicato il ${now.toLocaleDateString()} alle ${now.toLocaleTimeString()}`;
    article.appendChild(publishedAt);

    return article;
}

/*
function createArticle(titleData, descriptionData) {

    const article = document.createElement('article');
    article.classList.add('card');
    article.innerHTML = `
        <h2>${titleData}</h2>
        <p>${descriptionData}</p>
        <p>Pubblicato il 13/10/2022</p>
    `;

    return article;
}
*/

const main = document.querySelector('main');

const titleInput = document.getElementById('titleInput');
const descriptionTextarea = document.getElementById('descriptionTextarea');
const articleForm = document.getElementById('articleForm');
articleForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!titleInput.value) {
        alert('un value vuoto per title non è ammesso');
        return;
    }

    if(!descriptionTextarea.value) {
        alert('un value vuoto per description non è ammesso');
        return;
    }

    const article = createArticle(titleInput.value, descriptionTextarea.value);
    main.appendChild(article);

    titleInput.value = '';
    descriptionTextarea.value = '';
});