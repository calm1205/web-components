export class ShadowTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = document.createElement("h1");
    title.textContent = "Web Components";
    const style = document.createElement("style"); // shadow DOMを使っていないのでglobalなスタイルが適用される
    style.textContent = `
      h1 {
        color: blue;
      }
    `;
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(title);
  }
}

customElements.define("shadow-title", ShadowTitle);
