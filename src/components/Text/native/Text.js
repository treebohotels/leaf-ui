import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Platform } from 'react-native';
import { theme } from '../../../theme';

const isPlatformAndroid = !(Platform.OS === 'ios');

export const fontFamilies = {
  regular: isPlatformAndroid ? 'Roboto' : 'SFProDisplay-Regular',
  medium: isPlatformAndroid ? 'Roboto-Medium' : 'SFProDisplay-Medium',
  semibold: isPlatformAndroid ? 'Roboto-Medium' : 'SFProDisplay-Semibold',
  bold: 'Averta-Bold',
};

export const fontWeights = theme.fontWeight;

const Text = styled.Text`
  ${(p) => p.color ? `color: ${p.theme.color[p.color]};` : ''}
  ${(p) => p.size ? `font-size: ${p.theme.fontSize[p.size]};` : ''}
  ${(p) => p.weight ? `font-weight: ${p.theme.fontWeight[p.weight]};` : ''}
  ${(p) => p.lineHeight ? `line-height: ${p.lineHeight};` : ''}
  ${(p) => {
    if (p.family) {
      return `font-family: ${fontFamilies[p.family]}`;
    }
    return `font-family: ${p.theme.fontFamily[p.weight]}`;
  }}
  `;

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.number,
  family: PropTypes.string,
  truncate: PropTypes.bool,
};

Text.defaultProps = {
  weight: 'regular',
  size: 'm',
  color: 'greyDarker',
  family: 'regular',
};

export default Text;
