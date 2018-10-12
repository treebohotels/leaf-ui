import { Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const baseHeight = 600;
const verticalScale = (size) => ((SCREEN_HEIGHT / baseHeight) * size);

export const responsiveSizeInt = (size) => verticalScale(size);
export const responsiveSizePx = (sizePx) => {
  const sizeInt = parseInt(sizePx, 10);
  return `${verticalScale(sizeInt)}px`;
};
