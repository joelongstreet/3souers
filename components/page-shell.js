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
          color: var(--ink-soft);
          border-bottom: 1px solid var(--ink);
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
          font-size: 2.5rem;
          margin: 0;
          position: relative;
          z-index: 1;
        }
        header h1::before {
          content: "";
          position: absolute;
          inset: -0.4em -3em;
          background: url('${baseURL}paint-stroke.png') center / 100% 100% no-repeat;
          filter: hue-rotate(var(--stroke-hue, 0deg));
          z-index: -1;
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
        .logo-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .logo-wrap::before {
          content: "";
          position: absolute;
          inset: -1.5em -8em;
          background: url('${baseURL}paint-stroke.png') center / 100% 100% no-repeat;
          filter: hue-rotate(var(--stroke-hue, 0deg));
          z-index: 0;
        }
        .logo-wrap a {
          position: relative;
          z-index: 1;
        }
        .footer-wrap.dark .logo { background-color: var(--ink-soft); }
        .footer-wrap.light .logo { background-color: var(--cream); }
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
          <div class="logo-wrap"><a href="${baseURL}" aria-label="Home"><span class="logo"></span></a></div>
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
    if (!document.documentElement.style.getPropertyValue("--stroke-hue")) {
      const hues = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];
      document.documentElement.style.setProperty(
        "--stroke-hue",
        hues[Math.floor(Math.random() * hues.length)] + "deg",
      );
    }
    const count = this.querySelectorAll("page-section").length;
    const theme = count % 2 === 1 ? "light" : "dark";
    this.shadowRoot.querySelector(".footer-wrap").classList.add(theme);
  }
}

customElements.define("page-shell", PageShell);
