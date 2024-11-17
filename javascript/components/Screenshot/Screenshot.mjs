import Slide from '../Slide/Slide.mjs';

const extensionMap = {
  'webp': 'image/webp',
  'avif': 'image/avif',
};

const CSS_URL = new URL('./Screenshot.css', import.meta.url).href;
const templateHTML = ({dataset} = {}) => {
  const extensionsList = dataset.ext?.split(",");
  return `<style>@import "${CSS_URL}";</style>
${dataset.ext === undefined ? '':`<picture>
${extensionsList
    .map(extension => extension.trim())
    .map(extension => `<source
  srcset="${dataset.src.replace(/\.(svg|png|gif|avif|webp|jpg|jpeg|bmp)($|\?)/, `.${extension}$2`)}"
  type="${extensionMap[extension]}">`)}
`}
<img src="${dataset.src}" alt="${dataset.alt}" />
${dataset.ext !== undefined ? '':'</picture>'}
<slot></slot>`;
};

class Screenshot extends Slide {
  constructor() {
    super({
      slot: templateHTML
    });
  }
}

customElements.define('ex-screen', Screenshot);

export default Screenshot;