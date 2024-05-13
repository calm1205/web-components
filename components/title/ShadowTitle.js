export class ShadowTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = document.createElement("h1");
    title.textContent = "Web Components";
    const style = document.createElement("style");
    style.textContent = `
      h1 {
        color: blue;
      }
    `;
    this.shadowRoot.appendChild(title);
  }
}

customElements.define("shadow-title", ShadowTitle);
