class Greeting extends HTMLElement {
  constructor(countryCode, countryName) {
    super();
    this.countryCode = countryCode;
    this.countryName = countryName;
    // if you're reading this code, open a PR to add your own country flag!
    this.COUNTRY_FLAG_MAPPER = {
      US: '🇺🇸',
      CA: '🇨🇦',
      MX: '🇲🇽',
      JP: '🇬🇧',
      UK: '🇬🇧',
      ES: '🇪🇸',
      BR: '🇧🇷',
      NG: '🇳🇬',
      EG: '🇬🇧',
      IN: '🇮🇳',
      UA: '🇺🇦'
    };
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      const flag = this.COUNTRY_FLAG_MAPPER[this.countryCode] || '🌐';

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <template shadowroot="open">
          <style>
            h1 {
              text-align: center;
              color: var(--color-secondary);
            }

            span {
              color: var(--color-accent);
              font-style: italic;
            }


            [name="details"] {
              width: 80%;
              margin: 0 auto;
              text-align: center;
              color: var(--color-accent);
            }
          </style>

          <div>
            <h1>Coming From Country:
              <span>${this.countryName} ${flag}<span>
            </h1>
            <slot name="details"></slot>
          </div>
        </template>
      `;
    }
  }
}

export default Greeting;

customElements.define('wc-greeting', Greeting);