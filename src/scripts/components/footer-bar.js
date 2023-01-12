class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
     <footer>
      <p>Copyright © 2022 - TheRest Apps</p>
    </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
