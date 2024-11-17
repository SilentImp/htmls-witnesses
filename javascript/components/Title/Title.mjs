import Slide from '../Slide/Slide.mjs';
const CSS_URL = new URL('./Title.css', import.meta.url).href;
const templateHTML = ({dataset} = {}) => {
  const src = dataset?.src;
  const hasSRC = src !== undefined;
  console.log('src: ', src);
  const level = Math.min(Math.max(parseInt(dataset?.level || '1'), 1), 6);
  return `<style>@import "${CSS_URL}";${hasSRC ? `:host .slide.slide.slide.slide {background-image: url("${src}")}` : '' }</style>
<h${level}><slot></slot></h${level}>`;
};

class Title extends Slide {
  constructor() {
    super({
      slot: templateHTML
    });
  }
}
      
customElements.define('ex-title', Title);

export default Title;