const NAME = "Flawless Executor";

document.getElementById("year").textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(NAME);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy Name"), 900);
  } catch {
    // fallback if clipboard is blocked
    copyBtn.textContent = "Copy failed";
    setTimeout(() => (copyBtn.textContent = "Copy Name"), 900);
  }
});

// tiny fun counter
const visitsEl = document.getElementById("visits");
let v = 1;
setInterval(() => {
  v = Math.min(v + 1, 99);
  visitsEl.textContent = String(v);
}, 1200);
