export class AppTitle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = document.createElement("h1");
    title.textContent = "Web Components";
    this.appendChild(title);
  }
}

customElements.define("app-title", AppTitle);
