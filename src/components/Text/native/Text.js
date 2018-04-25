import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Platform } from 'react-native';

const isPlatformAndroid = !(Platform.OS === 'ios');

export const fontFamilies = {
  normal: isPlatformAndroid ? 'Roboto' : 'SFProDisplay-Regular',
  medium: isPlatformAndroid ? 'Roboto-Medium' : 'SFProDisplay-Medium',
  semibold: isPlatformAndroid ? 'Roboto-Medium' : 'SFProDisplay-Semibold',
  bold: 'Averta-Bold',
};

const Text = styled.Text`
  color: ${(props) => props.theme.color[props.color]};
  font-size: ${(props) => props.theme.fontSize[props.size]};
  font-weight: ${(props) => props.theme.fontWeight[props.weight]};
  font-family: ${(props) => fontFamilies[props.weight]};
  text-align: ${(props) => props.align};
`;

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf([
    'xxxxl',
    'xxxl',
    'xxl',
    'xl',
    'l',
    'm',
    's',
    'xs',
    'xxs',
    'xxxs',
  ]),
  weight: PropTypes.oneOf([
    'normal',
    'medium',
    'semibold',
    'bold',
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

Text.defaultProps = {
  color: 'greyDarker',
  size: 'm',
  weight: 'normal',
  align: 'left',
};

export default Text;
