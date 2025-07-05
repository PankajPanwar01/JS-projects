
// handle this end point with XMLHttpRequest
/*
const jokeDisplay = document.getElementById("display-joke");
const jokeButton = document.getElementById("getJoke");
const url = 'https://api.chucknorris.io/jokes/random';

jokeButton.addEventListener('click', ()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = function (){
        if (xhr.status === 200){
            const data = JSON.parse(xhr.responseText)
            jokeDisplay.innerHTML = data.value;
        }else{
            jokeDisplay.innerHTML = "Error: Could not fetch joke.";
        }
    };
    
    xhr.onerror = function() {
    jokeDisplay.innerHTML = "Network Error.";
    };

    xhr.send();
});
*/







// handle this end point with promises
/*
const jokeDisplay = document.getElementById("display-joke");
const jokeButton = document.getElementById("getJoke");
const url = 'https://api.chucknorris.io/jokes/random';

jokeButton.addEventListener("click", () => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      jokeDisplay.innerHTML = data.value;
    })
    .catch(error => {
      console.error(error);
      jokeDisplay.innerHTML = "Error: Could not fetch joke.";
    });
});
*/





// handle the case of race condition
//  Problem: If user clicks button fast multiple times, older responses might overwrite newer ones.
//  Solution: Track request ID, only display latest response.
const jokeDisplay = document.getElementById("display-joke");
const jokeButton = document.getElementById("getJoke");
const url = 'https://api.chucknorris.io/jokes/random';
let currentRequestId = 0;

jokeButton.addEventListener("click", () => {
  const requestId = ++currentRequestId;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (requestId === currentRequestId) {
        jokeDisplay.innerHTML = data.value;
      } else {
        console.log("Outdated response ignored");
      }
    })
    .catch(error => {
      if (requestId === currentRequestId) {
        jokeDisplay.innerHTML = "Error: Could not fetch joke.";
      }
    });
});






// -------------------------------------------------------------
// const jokeDisplay = document.getElementById("display-joke");
// const jokeButton = document.getElementById("getJoke");

// async function getJoke() {
//   try {
//     const response = await fetch("https://api.chucknorris.io/jokes/random");
//     const data = await response.json();
//     jokeDisplay.innerHTML = data.value;
//   } catch (error) {
//     jokeDisplay.innerHTML = "Oops! Failed to fetch joke.";
//     console.error(error);
//   }
// }

// jokeButton.addEventListener("click", getJoke);
