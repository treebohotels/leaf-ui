import getDeviceDimensions from './getDeviceDimensions';

export default (element) => {
  if (element) {
    const boundingClientRect = element.getBoundingClientRect();
    const deviceDimensions = getDeviceDimensions();
    const isInViewportVertically =
      boundingClientRect.top <= deviceDimensions.height && boundingClientRect.bottom >= 0;
    const isInViewportHorizontally =
      boundingClientRect.left <= deviceDimensions.width && boundingClientRect.right >= 0;
    return isInViewportVertically && isInViewportHorizontally;
  }

  return false;
};
