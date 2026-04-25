class PageShell extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="styles.css" />
      <header>
        <h1>3sœurs</h1>
      </header>
      <slot></slot>
      <section>
        <footer>
          Trois Sœurs · Built together in Kansas City, Missouri
        </footer>
      </section>
    `;
  }
}

class PageSection extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          background: var(--section-bg, var(--cream));
          color: var(--section-color, var(--ink));
        }
        section {
          padding: 5rem 2rem;
        }
        .wrap {
          max-width: 60rem;
          margin: 0 auto;
        }
      </style>
      <section>
        <div class="wrap">
          <slot></slot>
        </div>
      </section>
    `;
  }
}

customElements.define("page-shell", PageShell);
customElements.define("page-section", PageSection);
