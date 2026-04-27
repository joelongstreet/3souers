const baseURL = new URL("..", import.meta.url).href;

export class PageShell extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const noHeader = this.hasAttribute("no-header");
    shadow.innerHTML = `
      <style>
        header {
          background: var(--ink-soft);
          color: var(--cream);
          border-bottom: 1px solid var(--cream);
          font-family: "Shadows Into Light", cursive;
        }
        header a {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          color: inherit;
          text-decoration: none;
        }
        header h1 {
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
          padding: 1.5rem;
          padding-bottom: 1rem;
          font-size: 0.875rem;
          gap: 1rem;
        }
        footer a {
          color: inherit;
          text-decoration: none;
        }
        footer nav {
          display: flex;
          gap: 1.5rem;
        }
        .logo {
          display: block;
          height: 4.5rem;
          aspect-ratio: 142 / 117;
          background-color: currentColor;
          mask-image: url('${baseURL}logo.svg');
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-image: url('${baseURL}logo.svg');
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
        }
      </style>
      ${noHeader ? "" : `<header><a href="${baseURL}"><h1>3Sœurs</h1></a></header>`}
      <slot></slot>
      <div class="footer-wrap">
        <footer>
          <a href="${baseURL}" aria-label="Home"><span class="logo"></span></a>
          <span><a href="${baseURL}">Trois Sœurs</a> · Built together in Kansas City, Missouri</span>
          <nav>
            <a href="${baseURL}#about">About</a>
            <a href="${baseURL}#people">Us</a>
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
