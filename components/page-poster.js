export class PagePoster extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const image = this.getAttribute("image") || "";
    shadow.innerHTML = `
      <style>
        :host { display: block; width: 100%; background-color: var(--ink-soft); }
        .poster { max-width: 50rem; margin: 0 auto; }
        img { display: block; width: 100%; height: auto; }
      </style>
      <div class="poster"><img src="${image}" /></div>
    `;
  }
}

customElements.define("page-poster", PagePoster);
