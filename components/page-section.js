export class PageSection extends HTMLElement {
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
          padding: 4rem 2rem;
        }
        .wrap {
          max-width: 50rem;
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

customElements.define("page-section", PageSection);
