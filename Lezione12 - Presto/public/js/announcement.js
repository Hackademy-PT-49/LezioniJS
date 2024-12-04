function generateAnnoucementColumn(announcement) {

    const date = new Date(announcement.createdAt);

    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-6');
    col.innerHTML = `
        <div class="p-4">
            <p class="card-subtitle fw-semibold fs-5 text-primary">€${announcement.price}</p>
            <h5 class="my-3 display-5">${announcement.name}</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="d-flex justify-content-around p-4 text-body-secondary text-primary">
            <p class="mb-0 ${announcement.type == 'sell' ? 'text-danger' : 'text-primary'}"><i class="bi bi-tag-fill"></i> ${announcement.type.toUpperCase()}</p>
            <p class="mb-0"><i class="bi bi-bookmark-check-fill"></i> ${announcement.category}</p>
            <p class="mb-0"><i class="bi bi-calendar-fill"></i> ${date.toLocaleDateString()}</p>
        </div>
    `;

    return col;
}

async function loadAnnouncementById(id) {
    const response = await fetch('/server/api/annunci.json');
    if(response.status != 200) {
        throw new Error('problema lato server');
    }

    const announcements = await response.json();

    return announcements.find((announcement) => {
        return announcement.id == id
    });
}


document.addEventListener('DOMContentLoaded', async () => {

    const query = new URLSearchParams(window.location.search);
    const announcementId = query.get('id');

    const announcement = await loadAnnouncementById(announcementId);
    console.log(announcement);
    
    const announcementRow = document.getElementById('announcementRow');
    const col = generateAnnoucementColumn(announcement);
    announcementRow.appendChild(col);
});