import { PixelRatio } from 'react-native';

const responsiveSize = (sizePx) => {
  const pixelRatio = PixelRatio.get(); // https://facebook.github.io/react-native/docs/pixelratio#get
  const sizeInt = parseInt(sizePx.replace('px', ''), 10);
  let factor = 1;

  if (pixelRatio <= 1.5) {
    factor = 1;
  } else if (pixelRatio <= 2 && pixelRatio >= 1.5) {
    factor = 1.1;
  } else if (pixelRatio <= 2.5 && pixelRatio >= 2) {
    factor = 1.2;
  } else if (pixelRatio <= 3 && pixelRatio >= 2.5) {
    factor = 1.3;
  } else {
    factor = 1.4;
  }

  return `${sizeInt * factor}px`;
};

export default responsiveSize;
