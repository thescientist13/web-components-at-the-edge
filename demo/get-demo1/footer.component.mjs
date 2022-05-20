const template = document.createElement('template');

template.innerHTML = `
  <style>
    footer {
      text-align: center;
    }

    span {
      color: purple;
    }
  </style>

  <footer>
    <span>&copy; ${ new Date().getFullYear() }</span>
  </footer>
`;

class Footer extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

export default Footer;

customElements.define('wc-footer', Footer);