function populateCategorySelect(announcements, parentElement) {
    const categories = new Set();

    announcements.forEach((announcement) => {
        categories.add(announcement.category);
    });

    categories.forEach((category) => {
        const option = document.createElement('option');
        option.setAttribute('value', category);
        option.textContent = category;

        parentElement.appendChild(option);
    });
}


function generateAnnoucementColumn(announcement) {

    const date = new Date(announcement.createdAt);

    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-6', 'col-xl-4');

    /*
    col.innerHTML = `
    <a href="/announcement.html?id=${announcement.id}" class="card text-decoration-none">
        <div class="position-relative">
            <img src="https://picsum.photos/640/480" class="card-img-top" alt="...">
            <span class="position-absolute top-0 end-0 badge py-2 px-4 ${announcement.type == 'sell' ? 'bg-danger' : 'bg-primary'}">${announcement.type.toUpperCase()}</span>
        </div>
        <div class="card-body p-4">
            <p class="card-subtitle fw-semibold fs-5 text-primary">€${announcement.price}</p>
            <h5 class="card-title my-3 display-5">${announcement.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-footer d-flex justify-content-around p-4 text-body-secondary text-primary">
            <p class="mb-0"><button class="btn"><i class="bi bi-heart-fill"></i> Like</button></p>
            <p class="mb-0"><i class="bi bi-bookmark-check-fill"></i> ${announcement.category}</p>
            <p class="mb-0"><i class="bi bi-calendar-fill"></i> ${date.toLocaleDateString()}</p>
        </div>
    </a>`;
    */

    const anchor = document.createElement('a');
    anchor.className = 'card text-decoration-none';
    anchor.setAttribute('href',`/announcement.html?id=${announcement.id}`);
    col.append(anchor);

    const imageContainer = document.createElement('div');
    imageContainer.className = 'position-relative';
    anchor.appendChild(imageContainer);

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.setAttribute('src', 'https://picsum.photos/640/480');
    imageContainer.appendChild(image);

    const badge = document.createElement('span');
    badge.className = `position-absolute top-0 end-0 badge py-2 px-4 ${announcement.type === 'sell' ? 'bg-danger' : 'bg-primary'}`;
    badge.textContent = announcement.type.toUpperCase();
    imageContainer.appendChild(badge);

    const body = document.createElement('div');
    body.className = 'card-body p-4';
    anchor.appendChild(body);

    const price = document.createElement('p');
    price.className = 'card-subtitle fw-semibold fs-5 text-primary';
    price.textContent = `€${announcement.price}`;
    body.appendChild(price);

    const title = document.createElement('h5');
    title.className = 'card-title my-3 display-5';
    title.textContent = announcement.name;
    body.appendChild(title);

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    body.appendChild(description);

    const footer = document.createElement('div');
    footer.className = 'card-footer d-flex justify-content-around align-items-center p-4 text-body-secondary text-primary';
    anchor.appendChild(footer);

    const likeBtn = document.createElement('button');
    likeBtn.className = 'btn text-primary';
    footer.appendChild(likeBtn);

    const likeIcon = document.createElement('i');
    likeIcon.className = 'bi bi-heart-fill';
    likeBtn.appendChild(likeIcon);

    const likeText = document.createElement('span');
    likeText.textContent = 'Like';
    likeBtn.appendChild(likeText);


    const category = document.createElement('p');
    category.className = 'mb-0';
    footer.appendChild(category);

    const categoryIcon = document.createElement('i');
    categoryIcon.className = 'bi bi-bookmark-check-fill';
    category.appendChild(categoryIcon);

    const categoryText = document.createElement('span');
    categoryText.textContent = `${announcement.category}`;
    category.appendChild(categoryText);


    const createdAtParagraph = document.createElement('p');
    createdAtParagraph.className = 'mb-0';
    footer.appendChild(createdAtParagraph);

    const createdAtIcon = document.createElement('i');
    createdAtIcon.className = 'bi bi-calendar-fill';
    createdAtParagraph.appendChild(createdAtIcon);

    const createdAtText = document.createElement('span');
    createdAtText.textContent = `${date.toLocaleDateString()}`;
    createdAtParagraph.appendChild(createdAtText);

    return col;
}

function populateAnnouncementsRow(announcements) {
    const announcementsRow = document.getElementById('announcementsRow');

    // cancello gli elementi contenuti all'interno di announcementsRow
    // announcementsRow.innerHTML = '';
    while(announcementsRow.hasChildNodes()) {
        announcementsRow.removeChild(announcementsRow.firstChild)
    }

    announcements.forEach((announcement) => {
        const col = generateAnnoucementColumn(announcement);
        announcementsRow.appendChild(col);
    });
}

function announcementsFilteringAndSorting(announcements, options) {

    let announcementsFiltered = announcements.filter((announcement) => {
        // console.log('sono nella funzione di callback di filter');
        
        let isAnnouncementRequired = true;

        if(isAnnouncementRequired && options.search) {
            isAnnouncementRequired = announcement.name.toLowerCase().includes(options.search.toLowerCase());
        }

        if(isAnnouncementRequired && options.category) {  // categorySelect.value != ''
            isAnnouncementRequired = announcement.category == options.category;
        }

        if(isAnnouncementRequired && options.minPrice) {
            isAnnouncementRequired = Number(options.minPrice) <= Number(announcement.price);
        }

        if(isAnnouncementRequired && options.maxPrice) {
            isAnnouncementRequired = Number(options.maxPrice) >= Number(announcement.price);
        }

        return isAnnouncementRequired;
    });

    switch(options.sortedBy) {
        case 'ascByDate':
            announcementsFiltered.sort((left, right) => {
                return left.createdAt - right.createdAt;
            });
            break;
        case 'descByDate':
            announcementsFiltered.sort((left, right) => {
                return right.createdAt - left.createdAt;
            });
            break;
        case 'ascByPrice':
            announcementsFiltered.sort((left, right) => {
                return Number(left.price) - Number(right.price);
            });
            break;
        case 'descByPrice':
            announcementsFiltered.sort((left, right) => {
                return Number(right.price) - Number(left.price);
            });
            break;
        case 'ascByAlpha':
            announcementsFiltered.sort((left, right) => {
                return left.name.toLowerCase().localeCompare(right.name.toLowerCase());
            });
            break;
        case 'descByAlpha':
            announcementsFiltered.sort((left, right) => {
                return right.name.toLowerCase().localeCompare(left.name.toLowerCase());
            });
            break;
    }

    return announcementsFiltered;
}

async function loadAnnouncements() {
    const response = await fetch('/server/api/annunci.json');
    if(response.status != 200) {
        throw new Error('problema lato server');
    }

    const announcements = await response.json();
    return announcements;
}

document.addEventListener('DOMContentLoaded', async () => {

    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
    const minPriceInput = document.getElementById('minPriceInput');
    const maxPriceInput = document.getElementById('maxPriceInput');
    const sortSelect = document.getElementById('sortSelect');
    const filterForm = document.getElementById('filterForm');

    const announcements = await loadAnnouncements();
    populateCategorySelect(announcements, categorySelect);
    populateAnnouncementsRow(announcements);

    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const options = {
            search: searchInput.value,
            category: categorySelect.value,
            minPrice: minPriceInput.value,
            maxPrice: maxPriceInput.value,
            sortedBy: sortSelect.value,
        };

        const announcementsFiltered = announcementsFilteringAndSorting(announcements, options);
        populateAnnouncementsRow(announcementsFiltered);

        // searchInput.value = ''
    });
});


/*
let categories = new Set();
categories.add('Motori');
categories.add('Sport');
categories.add('Motori');
categories.add('Motori');
categories.add('Motori');
categories.add('Motori');

categories.forEach((category) => {
    console.log(category);
});
*/


