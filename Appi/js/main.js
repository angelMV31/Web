import { getBreeds} from './api.js';
import { showBreeds, updateButtons, updatePageInfo } from './ui.js';

const limitInput = document.getElementById('limitInput');
const updateLimitButton = document.getElementById('updateLimitButton');

let currentPage = 1;
let limit = limitInput ? parseInt(limitInput.value) : 5;
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

updateLimitButton.addEventListener('click', () => {
    limit = parseInt(limitInput.value);
    currentPage = 1;
    loadBreeds(currentPage, limit);
});

window.addEventListener('DOMContentLoaded', () => loadBreeds(currentPage, limit));
