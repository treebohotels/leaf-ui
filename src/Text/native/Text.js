import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Platform, PixelRatio } from 'react-native';
import theme from '../../theme';

const isPlatformAndroid = Platform.OS === 'android';

function normalizeFontSize(props) {
  const pixelRatio = PixelRatio.get(); // https://facebook.github.io/react-native/docs/pixelratio#get
  const sizePx = props.theme.fontSize[props.size];
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
}

const fontFamilies = {
  normal: isPlatformAndroid ? 'Roboto-Regular' : 'SFProDisplay-Regular',
  medium: isPlatformAndroid ? 'Roboto-Medium' : 'SFProDisplay-Medium',
  semibold: isPlatformAndroid ? 'Roboto-Medium' : 'SFProDisplay-Semibold',
  bold: 'Averta-Bold',
};

const Text = styled.Text`
  color: ${(props) => props.theme.color[props.color]};
  font-size: ${normalizeFontSize};
  font-family: ${(props) => fontFamilies[props.weight]};
  text-align: ${(props) => props.align};
`;

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(theme.fontSize),
  weight: PropTypes.oneOf(theme.fontWeight),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

Text.defaultProps = {
  color: 'greyDarker',
  size: 'm',
  weight: 'normal',
  align: 'left',
};

export default Text;
