import Slide from '../Slide/Slide.mjs';
const extensionMap = {
  'webp': 'image/webp',
  'avif': 'image/avif',
};
import { ClassNames } from "../../Selectors.mjs";
const CSS_URL = new URL('./Illustration.css', import.meta.url).href;
const templateHTML = ({dataset} = {}) => {
  const extensionsList = dataset.ext?.split(",");
  return `<style>@import "${CSS_URL}";</style>
${dataset.ext === undefined ? '':`<picture>
${extensionsList
    .map(extension => extension.trim())
    .map(extension => `<source
  srcset="${dataset.src.replace(/\.(svg|png|gif|avif|webp|jpg|jpeg|bmp)($|\?)/, `.${extension}$2`)}"
  type="${extensionMap[extension]}">`).join('')}
`}
<img src="${dataset.src}" alt="${dataset.alt}" />
${dataset.ext !== undefined ? '':'</picture>'}
<slot></slot>`;
};
class Illustration extends Slide {
  constructor() {
    super({
      slot: templateHTML
    });

    this.restartGif = this.restartGif.bind(this);
  }

  restartGif() {
    if (this.classList.contains(ClassNames.currentSlide)) {
      this.image.setAttribute('src', this.dataset.src);
    }
  }

  connectedCallback () {
    super.connectedCallback();

    if (this.dataset.restart !== undefined) {
      this.image = this.shadowRoot.querySelector('img');
      window[Symbol.for("SlideMessanger")].register('slidecontroller:change', this.restartGif);
    }
  }

  
}

customElements.define('ex-illustration', Illustration);

export default Illustration;