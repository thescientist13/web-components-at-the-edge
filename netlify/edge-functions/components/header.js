const template = document.createElement('template');

template.innerHTML = `
  <style>
    h1 {
      text-align: center;
    }
  </style>

  <header>
    <h1>Hello WC @ The Edge!</h1>
  </header>
`;

class Header extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

export default Header;

customElements.define('wc-header', Header);