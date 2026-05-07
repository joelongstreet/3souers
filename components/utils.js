const _base = new URL("..", import.meta.url).href;

export const hues = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];
export const pickHue = () =>
  hues[Math.floor(Math.random() * hues.length)] + "deg";

export const buttonCSS = `
  button[type="submit"] {
    background-color: var(--highlight);
    color: var(--cream);
    border: none;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
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
    background: url('${_base}paint-stroke.png') center / cover no-repeat;
    mix-blend-mode: soft-light;
    opacity: 0.6;
    pointer-events: none;
  }
  button[type="submit"]:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const ctaCSS = `
  .cta {
    display: inline-block;
    margin-top: auto;
    padding: 0.25rem 0.75rem;
    background: var(--highlight);
    color: var(--cream);
    text-decoration: none;
    font-size: 1rem;
    border-radius: var(--btn-radius, 4px);
    box-shadow: var(--btn-shadow, 2px 2px 0 rgba(0,0,0,0.2));
    letter-spacing: var(--btn-letter-spacing, 0.04em);
    filter: hue-rotate(var(--btn-hue, 0deg));
    position: relative;
    overflow: hidden;
  }
  .cta::before {
    content: "";
    position: absolute;
    inset: -15%;
    background: url('${_base}paint-stroke.png') center / cover no-repeat;
    mix-blend-mode: soft-light;
    opacity: 0.8;
    pointer-events: none;
  }
  .cta:hover { opacity: 0.85; }
`;

export const baseCSS = `
  h1, h2, h3, h4, h5, p { margin-top: 0; }
  h1, h2, h3 { font-family: "Fraunces", serif; font-weight: 400; margin-bottom: 3rem; }
  h1 { font-size: 3rem; }
  h2 { font-size: 1.75rem; line-height: 2.25rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.15rem; font-weight: 600; margin-bottom: 0.5rem; }
  h5 { font-size: 1.15rem; opacity: 0.7; font-style: italic; font-weight: normal; margin-top: -0.5rem; margin-bottom: 1rem; }
  p { max-width: 45rem; font-size: 1.15rem; margin-bottom: 1rem; }
  form { max-width: 100%; margin-top: 2rem; }
`;

export const formInputCSS = `
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
    box-shadow: 0 0 0 2px var(--highlight);
  }
  textarea {
    resize: vertical;
  }
`;
