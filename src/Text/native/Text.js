import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Platform, Text } from 'react-native';
import { responsiveSizePx } from '../../utils/reactNativeResponsiveSize';
import theme from '../../theme/native';

const isPlatformAndroid = Platform.OS === 'android';

const fontFamilies = {
  normal: isPlatformAndroid ? 'RegularFontAndroid' : 'RegularFontIOS',
  medium: isPlatformAndroid ? 'MediumFontAndroid' : 'MediumFontIOS',
  semibold: isPlatformAndroid ? 'MediumFontAndroid' : 'SemiboldFontIOS',
  bold: isPlatformAndroid ? 'BoldFontAndroid' : 'BoldFontIOS',
};

const CustomText = styled((props) => <Text {...props} />)`
  color: ${(props) => props.theme.color[props.color]};
  font-size: ${(props) => responsiveSizePx(props.theme.fontSize[props.size])};
  font-family: ${(props) => fontFamilies[props.weight]};
  text-align: ${(props) => props.align};
`;

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(theme.fontSize)),
  weight: PropTypes.oneOf(Object.keys(theme.fontWeight)),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

Text.defaultProps = {
  color: 'greyDarker',
  size: 'm',
  weight: 'normal',
  align: 'left',
};

export default CustomText;
