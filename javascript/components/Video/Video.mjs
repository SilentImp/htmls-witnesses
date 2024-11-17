import Slide from '../Slide/Slide.mjs';
import { ClassNames } from "../../Selectors.mjs";
const CSS_URL = new URL('./Video.css', import.meta.url).href;
const templateHTML = ({dataset} = {}) => {
  return `<style>@import "${CSS_URL}";</style>
<video
  ${dataset.loop !== undefined ? ' loop ' : ''}
  src="${dataset.src}" 
  ></video>

<slot></slot>`;
};

class Video extends Slide {
  constructor() {
    super({
      slot: templateHTML
    });

    this.restartVideo = this.restartVideo.bind(this);
  }

  restartVideo(event) {;
    if (event == undefined) return;
    const { detail: { oldSlide, slideNumber} } = event;
    if (oldSlide === slideNumber) return;
    if (slideNumber !== parseInt(this.dataset.number, 10)) {
      if (!this.video.paused && !this.video.ended && this.video.currentTime > 0) {
        this.video.currentTime = 0;
        this.video.pause();
      }
      return;
    };
  
    if (this.video.currentTime > 0) {
      this.video.currentTime = 0;
    }
    this.video.play();
  }

  connectedCallback () {
    super.connectedCallback();
    this.video = this.shadowRoot.querySelector('video');
    window[Symbol.for("SlideMessanger")].register('slidecontroller:select', this.restartVideo);
    this.restartVideo();
  }

  
}

customElements.define('ex-video', Video);

export default Video;