import { Selectors } from "../../Selectors.mjs";
const CSS_URL = new URL('./Cloud.css', import.meta.url).href;
const templateHTML = `<style>@import "${CSS_URL}";</style>
<section class="cloud"><slot></slot><div class="cloud-tail" aria-hidden></div></section>`;

class Cloud extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    const template = document.createElement('TEMPLATE');
    template.innerHTML = templateHTML;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    if (this.dataset.bgcolor) this.style.setProperty('--bgcolor', this.dataset.bgcolor);
    if (this.dataset.left) this.style.setProperty('--left', this.dataset.left);
    if (this.dataset.top) this.style.setProperty('--top', this.dataset.top);
    if (this.dataset.size) this.style.setProperty('--font-size', this.dataset.size);
    if (this.dataset.angle) this.style.setProperty('--angle', this.dataset.angle);
    if (this.dataset.tailSize) this.style.setProperty('--tail-size', this.dataset.tailSize);
    if (this.dataset.delay) this.style.setProperty('--show-delay', this.dataset.delay);
    if (this.dataset.hideDelay) this.style.setProperty('--hide-delay', this.dataset.hideDelay);

    this.restartCloud = this.restartCloud.bind(this);
  }

  restartCloud () {
    const isSelected = this.closest(Selectors.currentSlide) !== null;
    if (isSelected) {
      const delay = this.dataset.delay;
      this.removeAttribute('data-delay');
      setTimeout(()=>{
        this.setAttribute('data-delay', delay);
      }, 0)
    }
  }


  connectedCallback () {
    // super.connectedCallback();

    if (this.dataset.delay !== undefined) {
      window[Symbol.for("SlideMessanger")].register('slidecontroller:change', this.restartCloud);
    }
  }
}
      
customElements.define('ex-cloud', Cloud);

export default Cloud;