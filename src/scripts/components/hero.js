class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <div class="hero">
        <div class="tagline">
          <h1 class="herotitle">TheRest.</h1>
          <div class="herosubtitle">
          <p>
            find the best restaurants in every city you visit.
          </p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-custom', Hero);

const heroTitle = document.querySelector('.herotitle');
const heroSubtitle = document.querySelector('.herosubtitle p');

const heroTitleText = heroTitle.textContent;
const heroTitleSplitText = heroTitleText.split('');
heroTitle.textContent = '';

for (let i = 0; i < heroTitleSplitText.length; i += 1) {
  heroTitle.innerHTML += `<span>${heroTitleSplitText[i]}</span>`;
}

const heroSubtitleText = heroSubtitle.textContent;
const heroSubtitleSplitText = heroSubtitleText.split('');
heroSubtitle.textContent = '';

for (let i = 0; i < heroSubtitleSplitText.length; i += 1) {
  heroSubtitle.innerHTML += `<span>${heroSubtitleSplitText[i]}</span>`;
}

let char = 0;
const TIMER_ANIMATED_TEXT = 60;
let timer;
function complate() {
  clearInterval(timer);
}
function onTick() {
  const span = document.querySelectorAll('span')[char];
  span.classList.add('fade');
  char += 1;
  if (
    char === heroSubtitleSplitText.length &&
    char === heroSubtitleSplitText.length
  ) {
    complate();
  }
}

timer = setInterval(onTick, TIMER_ANIMATED_TEXT);
