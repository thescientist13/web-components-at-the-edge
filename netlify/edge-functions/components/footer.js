const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      color: var(--color-accent);
      bottom: 0;
      width: 100%;
      min-height: 30px;
      padding-top: 10px;
      text-align: center;
    }

    footer {
      background-color: #192a27;
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