//live_beuCeEfaep2F6D1cyCPeTOyxDUUxV6Fkvw7G9QN8TNahoXMhuSHtqLaQUyFjdWub 
//api key personal

const options = {
    headers: {
        'x-api-key': 'live_beuCeEfaep2F6D1cyCPeTOyxDUUxV6Fkvw7G9QN8TNahoXMhuSHtqLaQUyFjdWub'
    }
}

function getPageCount(response) {
    const total = parseInt(response.headers.get('Pagination-Count'));
    const limit = parseInt(response.headers.get('Pagination-Limit'));
    return Math.ceil(total / limit);
}

export async function getBreeds(page, limit){
    const apiUrl = "https://api.thecatapi.com/v1/breeds";

    try {
        const response = await fetch(`${apiUrl}?limit=${limit}&page=${page - 1}`, options); 
        if(!response.ok){
            throw new Error("Error " + response.status)
        }
        
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        };
    }catch (error) {
        console.error(error);
    }
}

const breedId = new URLSearchParams(window.location.search).get('id');
console.log(breedId);

export async function getBreed(breedId) {

    const apiUrlItem = `https://api.thecatapi.com/v1/images/${breedId}`;

    try {

        const response = await fetch(apiUrlItem, options);

        if (!response.ok) {
            throw new Error("Error " + response.status);
        }

        const data = await response.json();

        return data;

    } catch (error) {

        console.error("Error al obtener la raza:", error);

    }
}