export class CustomButton extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
      <button>
        <slot>default</slot>
      </button>
    `;

    const style = document.createElement("style");
    style.textContent = `
      button {
        color: white;
        background-color: cornflowerblue;
        border: none;
        border-radius: 4px;
      }
    `;

    this.customShadowRoot = this.attachShadow({ mode: "open" });
    this.customShadowRoot.appendChild(template.content.cloneNode(true));
    this.customShadowRoot.appendChild(style);
    this.render();
  }

  static get observedAttributes() {
    return ["size"];
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  render() {
    const size = this.getAttribute("size"); // small, medium, large
    const sizeStyle = (() => {
      switch (size) {
        case "small":
          return `
            button {
              font-size: 10px;
              padding: 4px 8px;
            }
          `;
        case "medium":
          return `
            button {
              font-size: 14px;
              padding: 8px 16px;
            }
          `;
        case "large":
          return `
            button {
              font-size: 18px;
              font-weight: bold;
              padding: 16px 32px;
            }
          `;
        default:
          return "";
      }
    })();
    const style = document.createElement("style");
    style.textContent = sizeStyle;
    this.customShadowRoot.appendChild(style);
  }
}

customElements.define("custom-button", CustomButton);