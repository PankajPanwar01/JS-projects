// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

const input = document.getElementById('user-input');
const userCard = document.getElementById('user-card');

// Debounce function: delays the API call until user stops typing
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Fetch user from API
async function fetchRandomUser() {
  try {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];

    const fullName = `${user.name.first} ${user.name.last}`;
    const location = `${user.location.city}, ${user.location.country}`;
    const image = user.picture.large;

    userCard.innerHTML = `
      <div class="card">
        <img src="${image}" alt="${fullName}" />
        <h2>${fullName}</h2>
        <p>${location}</p>
      </div>
    `;
  } catch (error) {
    userCard.innerHTML = `<p>Failed to fetch user. Try again.</p>`;
    console.error('Error:', error);
  }
}

// Attach debounced function to input event
const debouncedFetch = debounce(fetchRandomUser, 500);
input.addEventListener('input', debouncedFetch);
