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
  ${(props) => props.color ? `color: ${props.theme.color[props.color]};` : ''}
  ${(props) => props.size ? `font-size: ${props.theme.fontSize[props.size]};` : ''}
  ${(props) => props.weight ? `font-weight: ${props.theme.fontWeight[props.weight]};` : ''}
  ${(props) => props.lineHeight ? `line-height: ${props.lineHeight};` : ''}
  ${(props) => {
    if (props.family) {
      return `font-family: ${fontFamilies[props.family]}`;
    }
    return `font-family: ${props.theme.fontFamily[props.weight]}`;
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
