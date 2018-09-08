import { PixelRatio } from 'react-native';

const responsiveSize = (sizePx) => {
  const pixelRatio = PixelRatio.get();
  const sizeInt = parseInt(sizePx, 10);

  let factor = 1.4;
  if (pixelRatio <= 1.5) {
    factor = 1;
  } else if (pixelRatio <= 2) {
    factor = 1.1;
  } else if (pixelRatio <= 2.5) {
    factor = 1.2;
  } else if (pixelRatio <= 3) {
    factor = 1.3;
  }

  return `${sizeInt * factor}px`;
};

export default responsiveSize;
