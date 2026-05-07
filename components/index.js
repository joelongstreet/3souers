import "./analytics.js";
import "./page-shell.js";
import "./page-section.js";
import "./page-card.js";
import "./page-poster.js";
import "./project-contact.js";

window.addEventListener("load", () => {
  document.documentElement.style.scrollBehavior = "smooth";
});

const _btnHues = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];
const _pickHue = () => _btnHues[Math.floor(Math.random() * _btnHues.length)] + "deg";

document.querySelectorAll("button, .btn, page-card").forEach((el) => {
  el.style.setProperty("--btn-hue", _pickHue());
});
