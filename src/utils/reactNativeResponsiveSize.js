import { Dimensions } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const baseHeight = 600;
const verticalScale = (size) => ((WINDOW_HEIGHT / baseHeight) * size);

export const responsiveSizeInt = (size) => verticalScale(size);
export const responsiveSizePx = (sizePx) => {
  const sizeInt = parseInt(sizePx, 10);
  return `${verticalScale(sizeInt)}px`;
};
