export class LogWord extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.setAttribute("id", "sample");
    this.render();
  }

  render() {
    const dom = document.getElementById("sample");

    const button = document.createElement("button");
    button.addEventListener("click", () => console.log(dom.innerHTML));
    button.innerText = "click me";
    this.shadowRoot.appendChild(button);
  }
}
customElements.define("log-word", LogWord);
