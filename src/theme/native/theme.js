import { responsiveSizeInt, responsiveSizePx } from '../../utils/reactNativeResponsiveSize';
import baseTheme from '../theme';

const theme = {
  ...baseTheme,
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
