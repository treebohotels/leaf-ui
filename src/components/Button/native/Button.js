import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  ${(p) => ({
    solid: `
      background-color: ${p.light ? p.theme.color.white : p.theme.color[p.color]};
      border-color: ${p.light ? p.theme.color.white : p.theme.color[p.color]};
    `,
    outlined: `
      background-color: transparent;
      border-color: ${p.theme.color[p.color]};
    `,
    transparent: `
      background-color: transparent;
      border-color: transparent;
    `,
  }[p.kind])}
  ${(p) => ({
    default: `
      border-radius: ${p.theme.borderRadius};
    `,
    flat: `
      border-radius: 0;
    `,
    rounded: `
      border-radius: ${p.theme.px(10)};
    `,
  }[p.shape])}
  ${(p) => ({
    small: `
      padding: ${p.theme.px(1)};
    `,
    regular: `
      padding: ${p.theme.px(2)};
    `,
    large: `
      padding: ${p.theme.px([2, 3])};
    `,
  }[p.size])}
  ${(p) => p.block ? 'align-self: stretch;' : 'align-self: flex-start;'}
  ${(p) => p.disabled ? 'opacity: 0.5;' : ''}
  `;

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  color: PropTypes.string,
  kind: PropTypes.oneOf(['solid', 'outlined', 'transparent']),
  shape: PropTypes.oneOf(['default', 'flat', 'rounded']),
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  light: PropTypes.bool,
};

Button.defaultProps = {
  color: 'green',
  kind: 'solid',
  size: 'regular',
  shape: 'default',
  block: false,
  disabled: false,
  light: false,
};

export default Button;
