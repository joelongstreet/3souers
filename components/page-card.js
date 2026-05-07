import { ctaCSS } from "./utils.js";

export class PageCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const image = this.getAttribute("image") || "";
    const title = this.getAttribute("title") || "";
    const subtitle = this.getAttribute("subtitle") || "";
    const description = this.getAttribute("description") || "";
    const href = this.getAttribute("href");
    const cta = this.getAttribute("cta");
    const img = `<div class="img"><img src="${image}" alt="${title}" /></div>`;
    shadow.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid var(--section-color, var(--ink));
          padding-bottom: 1rem !important;
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
          transition: transform 0.3s ease;
        }
        a { display: block; }
        a:hover .img img { transform: scale(1.03); }
        h4 { font-size: 1.15rem; font-weight: 400; margin: 0; font-family: "Fraunces", serif;}
        h5 { font-size: 1rem; opacity: 0.7; font-weight: 200; margin: 0; line-height: 1rem; font-family: "Fraunces", serif; }
        p  { font-size: 1rem; line-height: 1.5rem; margin: 0.5rem 0 1.5rem; }
        ${ctaCSS}
      </style>
      ${href ? `<a href="${href}">${img}</a>` : img}
      <h4>${title}</h4>
      ${subtitle ? `<h5>${subtitle}</h5>` : ""}
      <p>${description}</p>
      ${href && cta ? `<a class="cta" href="${href}">${cta} »</a>` : ""}
    `;
  }
}

customElements.define("page-card", PageCard);
