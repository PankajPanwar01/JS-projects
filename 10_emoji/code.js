const btn = document.querySelector("#emoji");
const emojis = ['😀', '😎', '😂', '🥳', '😇', '😍', '🤩', '🤔', '😜', '😭','🐶', '🐱', '🐵', '🦁', '🐯', '🐸', '🐼', '🐷', '🦊', '🐻'];

btn.addEventListener("mouseenter", () => {
  const randomEmoji = emojis[Math.floor(Math.random()*emojis.length)];
  btn.textContent = randomEmoji;
  btn.style.filter = 'none'; // Remove grayscale if applied earlier
});


btn.addEventListener("mouseleave", ()=>{
  // Grayscale apply karo jab mouse bahar jaye
  btn.style.filter = 'grayscale(100%)';
});