class ProjectContact extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
        }
        h2 {
          font-family: "Fraunces", serif;
          font-weight: 400;
          font-size: 1.75rem;
          line-height: 2.25rem;
          margin-bottom: 3rem;
          margin-top: 0;
        }
        p {
          font-size: 1.15rem;
          margin-bottom: 1rem;
          max-width: 45rem;
        }
        form {
          max-width: 100%;
          margin-top: 2rem;
        }
        input[type="text"],
        textarea {
          width: 100%;
          padding: 1rem;
          color: var(--ink);
          background-color: white;
          margin-bottom: 1rem;
          border: none;
          font-size: 1.15rem;
          font-family: inherit;
          display: block;
          box-sizing: border-box;
        }
        input[type="text"]:focus,
        textarea:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--highlight, #a6362b);
        }
        textarea {
          resize: vertical;
        }
        button[type="submit"] {
          background-color: var(--highlight, #a6362b);
          color: var(--cream, #f5f3ee);
          border: none;
          padding: 1rem 1.25rem;
          font-size: 1.15rem;
          font-family: inherit;
          cursor: pointer;
          border-radius: var(--btn-radius, 4px);
          box-shadow: var(--btn-shadow, 2px 2px 0 rgba(0,0,0,0.2));
          letter-spacing: var(--btn-letter-spacing, 0.04em);
          filter: hue-rotate(var(--btn-hue, 0deg));
          position: relative;
          overflow: hidden;
        }
        button[type="submit"]::before {
          content: "";
          position: absolute;
          inset: -15%;
          background: url("/paint-stroke.png") center / cover no-repeat;
          mix-blend-mode: soft-light;
          opacity: 0.6;
          pointer-events: none;
        }
        button[type="submit"]:disabled {
          opacity: 0.5;
          cursor: default;
        }
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

    const _hues = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];
    const _pick = () => _hues[Math.floor(Math.random() * _hues.length)] + "deg";
    shadow.querySelectorAll("button, .file-btn").forEach((el) => {
      el.style.setProperty("--btn-hue", _pick());
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
