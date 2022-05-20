const template = document.createElement('template');

template.innerHTML = `
  <style>
    ul {
      list-style-type: none;
      color: #efefef;
    }

    ul li {
      float: left;
      width: 150px;
    }

    ul li a:visited {
      color: #efefef;
    }
  </style>

  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/artists">Artists</a></li>
    <ul>
  </nav>
`;

class Navigation extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

export default {
  Navigation
};

customElements.define('wc-navigation', Navigation);