const baseURL = new URL("..", import.meta.url).href;

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
        .cta {
          display: inline-block;
          margin-top: auto;
          padding-top: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: var(--highlight);
          color: var(--cream);
          text-decoration: none;
          font-size: 0.95rem;
          border-radius: var(--btn-radius, 4px);
          box-shadow: var(--btn-shadow, 2px 2px 0 rgba(0, 0, 0, 0.2));
          letter-spacing: var(--btn-letter-spacing, 0.04em);
          filter: hue-rotate(var(--btn-hue, 0deg));
          position: relative;
          overflow: hidden;
        }
        .cta::before {
          content: "";
          position: absolute;
          inset: -15%;
          background: url('${baseURL}paint-stroke.png') center / cover no-repeat;
          mix-blend-mode: soft-light;
          opacity: 0.8;
          pointer-events: none;
        }
        .cta:hover { opacity: 0.85; }
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
