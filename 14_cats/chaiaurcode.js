const url = 'https://api.thecatapi.com/v1/images/search';
const display = document.querySelector('.container');
const btn = document.querySelector('.btn');

async function getCat() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const imageUrl = data[0].url;

        // Clear previous image (optional)
        display.innerHTML = '';

        // Create img element
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Random Cat';
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';

        // Display image in the container
        display.appendChild(img);
    } catch (error) {
        display.innerHTML = "Oops! Failed to fetch cat image.";
        console.error(error);
    }
}

btn.addEventListener('click', getCat);
