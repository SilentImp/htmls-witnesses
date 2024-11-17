export default (element, percentVisible) => {
  const
    rect = element.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    console.log(element.getBoundingClientRect());
    console.log(windowHeight);
    console.log(percentVisible);
    console.log('e: ', element);

  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  )
};