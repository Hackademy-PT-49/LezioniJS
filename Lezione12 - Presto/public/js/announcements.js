function generateAnnoucementColumn(announcement) {

    const date = new Date(announcement.createdAt);

    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-6', 'col-xl-4');
    col.innerHTML = `
    <div class="card">
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
            <p class="mb-0"><i class="bi bi-heart-fill"></i> Like</p>
            <p class="mb-0"><i class="bi bi-bookmark-check-fill"></i> ${announcement.category}</p>
            <p class="mb-0"><i class="bi bi-calendar-fill"></i> ${date.toLocaleDateString()}</p>
        </div>
    </div>
    `;

    return col;
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

    const announcementsRow = document.getElementById('announcementsRow');

    const announcements = await loadAnnouncements();
    announcements.forEach((announcement) => {

        const col = generateAnnoucementColumn(announcement);
        announcementsRow.appendChild(col);
    })
});