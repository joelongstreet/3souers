export class PageCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const image = this.getAttribute("image") || "";
    const title = this.getAttribute("title") || "";
    const subtitle = this.getAttribute("subtitle") || "";
    const description = this.getAttribute("description") || "";
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          border-top: 2px solid var(--card-border, currentColor);
          padding-top: 1rem;
        }
        .img {
          aspect-ratio: 1 / 1;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        h4 { font-size: 1.15rem; font-weight: 600; margin: 0; }
        h5 { font-size: 1.15rem; opacity: 0.7; font-style: italic; font-weight: normal; margin: 0; }
        p  { font-size: 1rem; line-height: 1.5rem; margin: 0.5rem 0 0; }
      </style>
      <div class="img"><img src="${image}" alt="${title}" /></div>
      <h4>${title}</h4>
      <h5>${subtitle}</h5>
      <p>${description}</p>
    `;
  }
}

customElements.define("page-card", PageCard);
