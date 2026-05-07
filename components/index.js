import "./analytics.js";
import "./page-shell.js";
import "./page-section.js";
import "./page-card.js";
import "./page-poster.js";
import "./project-contact.js";
import { pickHue } from "./utils.js";

window.addEventListener("load", () => {
  document.documentElement.style.scrollBehavior = "smooth";
});

document.querySelectorAll("button, .btn, page-card").forEach((el) => {
  el.style.setProperty("--btn-hue", pickHue());
});
