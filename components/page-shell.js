const baseURL = new URL("..", import.meta.url).href;

export class PageShell extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const hero = this.hasAttribute("hero");
    shadow.innerHTML = `
      <style>
        header h1 {
          font-family: "Shadows Into Light", cursive;
        }
        header.hero {
          background-image: url("${baseURL}people/header.JPG");
          height: 100vh;
          width: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          color: var(--highlight);
          filter: sepia(20%);
        }
        header.hero h1 {
          font-size: 5rem;
          padding: 2rem;
          text-align: right;
          color: var(--ink);
          margin: 0;
        }
        header.bar {
          background: var(--cream);
          color: var(--ink);
        }
        header.bar a {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          color: inherit;
          text-decoration: none;
        }
        header.bar h1 {
          font-size: 2rem;
          margin: 0;
        }
        .footer-wrap.dark {
          background: var(--ink-soft);
          color: var(--cream);
        }
        .footer-wrap.light {
          background: var(--cream);
          color: var(--ink);
        }
        footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          font-size: 0.875rem;
          gap: 1rem;
        }
        footer a {
          color: inherit;
          text-decoration: none;
        }
        footer nav a {
          opacity: 0.7;
        }
        footer nav a:hover {
          opacity: 1;
        }
        footer nav {
          display: flex;
          gap: 1.5rem;
        }
      </style>
      <header class="${hero ? "hero" : "bar"}">
        ${hero ? "<h1>3sœurs</h1>" : `<a href="${baseURL}"><h1>3sœurs - Built Together</h1></a>`}
      </header>
      <slot></slot>
      <div class="footer-wrap">
        <footer>
          <span><a href="${baseURL}">Trois Sœurs</a> · Built together in Kansas City, Missouri</span>
          <nav>
            <a href="${baseURL}#about">About</a>
            <a href="${baseURL}#contact">Contact</a>
          </nav>
        </footer>
      </div>
    `;
  }

  connectedCallback() {
    const count = this.querySelectorAll("page-section").length;
    const theme = count % 2 === 1 ? "light" : "dark";
    this.shadowRoot.querySelector(".footer-wrap").classList.add(theme);
  }
}

customElements.define("page-shell", PageShell);
