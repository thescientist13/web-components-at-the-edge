class Header extends HTMLElement {
  constructor() {
    super();

    if (this.shadowRoot) {
      const button = this.shadowRoot.querySelector('button');

      button.addEventListener('click', this.toggle);
    }
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = this.render();
    }
  }

  render() {
    return `
      <style>
        header {
          background-color: var(--color-secondary);
          color: white;
          text-decoration: underline;
          text-align: center;
          display: grid;
          grid-auto-flow: row;
          grid-template-columns: repeat(3, 1fr);
          padding: 10px 0;
        }

        h1, h2 {
          margin: 0;
          padding: 0;
        }

        .header img.github-badge {
          display: inline-block;
          width: 90px;
          height: 20px;
        }

        img.logo {
          width: 50%;
        }

        button {
          cursor: pointer;
        }
      </style>

      <header>
        <div>
          <a href="https://github.com/thescientist13/wcc" target="_blank" rel="noopener noreferrer">
            <img class="logo" src="https://magnificent-caramel-f19440.netlify.app/assets/wcc-logo.png" alt="WCC logo"/>
          </a>
        </div>

        <div class="content">
          <h1><a href="https://github.com/thescientist13/web-components-at-the-edge" title="presentation repo" target="_blank" rel="noopener noreferrer">Web Components @ The Edge</a></h1>
          <slot name="demo"></slot>
        </div>

        <div class="social">
          <a href="https://github.com/thescientist13/web-components-at-the-edge" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.shields.io/github/stars/thescientist13/web-components-at-the-edge.svg?style=social&logo=github&label=github"
              alt="Presentation repo GitHub badge"
              class="github-badge"/>
          </a>
        </div>
      </header>
    `;
  }
}

export default Header;

customElements.define('wc-header', Header);