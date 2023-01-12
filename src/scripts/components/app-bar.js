class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="menubar">
        <p class="logo-mob">TheRest.</p>
        <div class="burger-menu" >
          <button id="menu" href="#">&#9776;</button>
        </div>
      </div>
      <div class="nav-mob" id="drawer">
        <ul class="navlist-mob">
          <li><a href="#/home" class="navitems-mob">Home</a></li>
          <li><a href="#/favorite" class="navitems-mob">Favorite</a></li>
          <li>
            <a
              href="https://dennispradana.vercel.app"
              target="_blank"
              class="navitems-mob"
              >About Us</a
            >
          </li>
        </ul>
      </div>
    
      <nav class="navbar">
        <div class="logo">
          <a href="/">TheRest.</a>
        </div>
        <ul class="navlist">
          <li><a href="#/home" class="navitems">Home</a></li>
          <li><a href="#/favorite" class="navitems">Favorite</a></li>
          <li>
            <a
              href="https://dennispradana.vercel.app"
              target="_blank"
              class="navitems"
              >About Us</a
            >
          </li>
        </ul>
      </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);

const navlist = document.querySelector('.navlist');
navlist.addEventListener('click', (e) => {
  const navItems = e.target;
  if (navItems.classList.contains('navitems')) {
    const menuActive = document.querySelector('ul li a.active');
    if (
      menuActive !== null &&
      navItems.getAttribute('href') !== menuActive.getAttribute('href')
    ) {
      menuActive.classList.remove('active');
    }
    navItems.classList.add('active');
  }
});
