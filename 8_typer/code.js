const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Awesome", "Fun", "Powerful", "Versatile"];
const typingDelay = 150;   // अक्षर टाइप करने का delay (ms)
const erasingDelay = 100;  // अक्षर मिटाने का delay
const newTextDelay = 2000; // पूरा word लिखने के बाद रुकने का delay
let textArrayIndex = 0;    // कौन सा word चल रहा है
let charIndex = 0;         // उस word का कौन सा अक्षर टाइप हो रहा है


function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
