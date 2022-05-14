const template = document.createElement('template');

template.innerHTML = `
  <style>
    h6 {
      color: red;
      font-size: 25px;
    }

    h6.hydrated {
      animation-duration: 3s;
      animation-name: slidein;
    }

    @keyframes slidein {
      from {
        margin-left: 100%;
        width: 300%;
      }

      to {
        font-size: 25px;
      }
    }
  </style>

  <h6>This is a test</h6>
`;

class TestComponent extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    } else {
      const header = this.shadowRoot.querySelector('h6');

      header.style.color = this.getAttribute('color');
      header.classList.add('hydrated');
    }
  }
}

export { TestComponent };
export default TestComponent;

customElements.define('wc-test', TestComponent);