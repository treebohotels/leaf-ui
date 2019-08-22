import { responsiveSizeInt, responsiveSizePx } from '../utils/reactNativeResponsiveSize';
import webTheme from './theme.web';

const theme = {
  ...webTheme,
  borderRadius: responsiveSizePx('2px'),
  pxScale: responsiveSizeInt(8),
  px: (value) => {
    const values = [].concat(value);
    return values
      .map((v) => typeof v === 'string' ? v : `${v * theme.pxScale}px`)
      .join(' ');
  },
};

export default theme;
