import { pickHue, baseCSS, buttonCSS, formInputCSS } from "./utils.js";

class ProjectContact extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
        }
        ${baseCSS}
        ${formInputCSS}
        ${buttonCSS}
      </style>
      <h2 id="heading">What should this library remember?</h2>
      <p id="intro">Leave a note or share a memory. We'd love to know what this library means to you.</p>
      <form id="form">
        <input type="text" name="name" placeholder="Name (optional)" />
        <textarea rows="4" name="message" placeholder="What you're thinking about" required></textarea>
        <button type="submit">Leave your mark</button>
      </form>
    `;

    const form = shadow.getElementById("form");
    const heading = shadow.getElementById("heading");
    const intro = shadow.getElementById("intro");
    const projectId = this.getAttribute("project-id") || "";

    shadow.querySelectorAll("button, .file-btn").forEach((el) => {
      el.style.setProperty("--btn-hue", pickHue());
    });

    form.querySelector("textarea").addEventListener("invalid", function () {
      this.setCustomValidity("Tell us a little something.");
    });
    form.querySelector("textarea").addEventListener("input", function () {
      this.setCustomValidity("");
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button");
      btn.disabled = true;
      btn.textContent = "Sending...";

      const name = form.querySelector('[name="name"]').value;
      const message = form.querySelector('[name="message"]').value;

      const params = {
        project_id: projectId,
        email: name || "Anonymous",
        message,
      };

      this._ensureEmailJS().then(() => {
        window.emailjs.send("3Soeurs", "template_61eezn8", params).then(
          () => {
            form.style.display = "none";
            intro.style.display = "none";
            heading.textContent = "Remembered. Thank you.";
          },
          () => {
            btn.disabled = false;
            btn.textContent = "Leave your mark";
          },
        );
      });
    });
  }

  _ensureEmailJS() {
    if (window.emailjs) return Promise.resolve();
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.onload = () => {
        window.emailjs.init({ publicKey: "bj2L_S3nwdlIeg191" });
        resolve();
      };
      document.head.appendChild(script);
    });
  }
}

customElements.define("project-contact", ProjectContact);
