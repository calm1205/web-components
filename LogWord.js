class LogWord extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const button = document.createElement("button");
    button.addEventListener("click", () => alert("hi"));
    button.innerText = "click me";
    this.shadowRoot.appendChild(button);
  }
}
customElements.define("log-word", LogWord);
