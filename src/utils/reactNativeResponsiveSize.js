import { Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const baseHeight = 568;
const baseWidth = 320;

const verticalScale = SCREEN_HEIGHT / baseHeight;
const horizontalScale = SCREEN_WIDTH / baseWidth;

const scale = (size) => ((verticalScale / horizontalScale) * size);

export const responsiveSizeInt = (size) => scale(size);
export const responsiveSizePx = (sizePx) => {
  const sizeInt = parseInt(sizePx, 10);
  return `${scale(sizeInt)}px`;
};
