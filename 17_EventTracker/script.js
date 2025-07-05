const log = document.querySelector("#log");
const form = document.querySelector("#myForm");

function showLog(message) {
  log.innerHTML = `<pre>${message}</pre>`;
}

// 🖱️ Mouse Click Tracker
document.addEventListener("click", function (e) {
  let info = `
🖱️ Mouse Click Event
----------------------------
Type: ${e.type}
Target: ${e.target.tagName}
Client Position: (${e.clientX}, ${e.clientY})
Screen Position: (${e.screenX}, ${e.screenY})
Time: ${e.timeStamp.toFixed(2)}ms
  `;
  showLog(info);
});

// ⌨️ Keyboard Press Tracker
document.addEventListener("keydown", function (e) {
  let info = `
⌨️ Keyboard Event
----------------------------
Key: ${e.key}
Code: ${e.code}
KeyCode: ${e.keyCode}
Ctrl: ${e.ctrlKey}
Shift: ${e.shiftKey}
Alt: ${e.altKey}
Time: ${e.timeStamp.toFixed(2)}ms
  `;
  showLog(info);
});

// 📝 Form Submit Event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload
  let info = `
📤 Form Submit Event
----------------------------
Type: ${e.type}
Target: ${e.target.tagName}
Default Prevented: ${e.defaultPrevented}
Time: ${e.timeStamp.toFixed(2)}ms
  `;
  showLog(info);
});
