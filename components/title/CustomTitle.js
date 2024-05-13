export class CustomTitle extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
      <h1>
        <slot>default title</slot>
      </h1>
    `;

    const style = document.createElement("style");
    style.textContent = `
      h1 {
        color: green;
      }
    `;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot.appendChild(style);
  }
}

customElements.define("custom-title", CustomTitle);
