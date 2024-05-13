export class AppTitle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = document.createElement("h1");
    title.textContent = "Web Components";

    const style = document.createElement("style");
    style.textContent = `
      h1 {
        color: red;
      }
    `;
    this.appendChild(style);
    this.appendChild(title);
  }
}

customElements.define("app-title", AppTitle);
