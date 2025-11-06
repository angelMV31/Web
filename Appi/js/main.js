import { getBreeds} from './api.js';
import { getBreeds, updateButtons, updatePageInfo } from './ui.js';

let currentPage = 1;
let limit = 5;
let totalPages = 1;

async function loadBreeds(page) {
    const breeds = await getBreeds(page, limit);
    showBreeds(breeds.breeds);
    updateButtons(currentPage, breeds.pageCount);
    totalPages = breeds.pageCount;
    updatePageInfo(currentPage, breeds.pageCount);
}

document.getElementById('prevPage').addEventListener('click', () => {
    if(currentPage > 1){
        currentPage--;
        loadBreeds(currentPage);
    }
})

document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    loadBreeds(currentPage);
})

document.getElementById('limitSelect').addEventListener('change', (event) => {
    limit = parseInt(event.target.value);
    currentPage = 1;
    loadBreeds(currentPage, limit);
});

window.addEventListener('DOMContentLoaded', () => loadBreeds(currentPage, limit));
