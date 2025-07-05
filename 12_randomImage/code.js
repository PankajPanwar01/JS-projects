const container = document.querySelector('.content');
const button = document.querySelector('button');

// A function to generate a random image from Unsplash source
function addRandomImage() {
  const width = Math.floor(Math.random() * 100) + 300;  // 300 to 400
  const height = Math.floor(Math.random() * 100) + 300; // 300 to 400
  const img = document.createElement('img');
  img.src = `https://source.unsplash.com/random/${width}x${height}`;
  img.alt = 'Random Unsplash Image';
  container.appendChild(img);
}

// Add some initial images
for (let i = 0; i < 6; i++) {
  addRandomImage();
}

// Add image on button click
button.addEventListener('click', addRandomImage);
