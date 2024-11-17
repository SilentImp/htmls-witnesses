import Slide from '../Slide/Slide.mjs';
const CSS_URL = new URL('./MKTitle.css', import.meta.url).href;
const templateHTML = ({dataset} = {}) => {
  const level = Math.min(Math.max(parseInt(dataset?.level || '1'), 1), 6);
  return `<style>@import "${CSS_URL}";</style>
<h${level}><slot></slot></h${level}>`;
};

class MKTitle extends Slide {
  constructor() {
    super({
      slot: templateHTML
    });

    if (this.dataset.top) this.style.setProperty('--top', this.dataset.top);
    if (this.dataset.left) this.style.setProperty('--left', this.dataset.left);
    if (this.dataset.size) this.style.setProperty('--font-size', this.dataset.size);
  }
}
      
customElements.define('ex-mktitle', MKTitle);

export default MKTitle;