


fetch('/server/api/categorie.json')
    .then((response) => {

        if(response.status != 200) {
            console.log('problema lato server');
            return;
        }

        // promise chaining
        return response.json();
    })
    .then((categories) => {

        const categoriesRow = document.getElementById('categoriesRow');
        
        categories.forEach((category) => {
            console.log(category);

            const col = document.createElement('div');
            col.classList.add('col-12', 'col-md-6', 'col-lg-4', 'col-xl-3');
            categoriesRow.appendChild(col);

            const card = document.createElement('div');
            card.classList.add('category-card');
            col.appendChild(card);

            const link = document.createElement('a');
            link.setAttribute('href', '#');
            card.appendChild(link);

            const iconContainer = document.createElement('div');
            iconContainer.classList.add('icon-container');
            link.appendChild(iconContainer);

            const icon = document.createElement('i');
            icon.classList.add('bi', 'bi-heart-fill');  // TODO
            iconContainer.appendChild(icon);

            const title = document.createElement('h3');
            title.textContent = category.name;
            link.appendChild(title);

            const description = document.createElement('p');
            description.classList.add('mb-0');
            description.textContent = `${category.announcementsCount} Annunci`;
            link.appendChild(description);
        }); 
    })
    .catch((error) => {
        // problema lato client
        console.log(error);
    });


/*
div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="category-card">
        <a href="#">
            <div class="icon-container">
                <i class="bi bi-heart-fill"></i>
            </div>
            <h3>Auto</h3>
            <p class="mb-0">123 Annunci</p>
        </a>
    </div>
</div>
*/