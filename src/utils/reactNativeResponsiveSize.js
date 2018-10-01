import { scale } from 'react-native-size-matters';

export const responsiveSizeInt = (size) => scale(size);

export const responsiveSizePx = (sizePx) => {
  const sizeInt = parseInt(sizePx, 10);
  return `${scale(sizeInt)}px`;
};
