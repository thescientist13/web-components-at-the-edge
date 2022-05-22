const template = document.createElement('template');

template.innerHTML = `
  <style>
    [name="title"] {
      color: green;
    }

    ::slotted(img) {
      max-width: 500px;
    }
  </style>

  <div class="card">
    <slot name="title">My default title</slot>
    <slot name="image"></slot>
  </div>
`;

class Card extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

export default Card;

customElements.define('wc-card', Card);