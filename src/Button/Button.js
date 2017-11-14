import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button.attrs({
  disabled: (props) => props.disabled,
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${(props) => ({
    small: `${props.theme.px(1)}`,
    default: `${props.theme.px(2)}`,
    large: `${props.theme.px([2, 3])}`,
  }[props.size])};
  ${(props) => (props.full ? 'width: 100%;' : '')}
  color: ${(props) => (props.transparent ? props.theme.color[props.color] : props.theme.color.white)};
  background: ${(props) => (props.transparent ? 'transparent' : props.theme.color[props.color])};
  border: 1px solid ${(props) => (props.border ? props.theme.color[props.color] : 'transparent')};
  border-radius: ${(props) => (props.flat ? '0' : props.theme.border.radius)};
  ${(props) => (props.disabled ? `
    cursor: default;
    opacity: 0.5;
  ` : '')}

&:hover {
  ${(props) => {
    if (props.disabled) return '';
    if (props.transparent) {
      return css`
        color: ${props.theme.color[`${props.color}Dark`]};
        background: ${props.theme.color.blackTranslucent};
        ${props.border ? `border-color: ${props.theme.color[`${props.color}Dark`]};` : ''}
      `;
    }
    return `
      background: ${props.theme.color[`${props.color}Dark`]};
    `;
  }}
}`;

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  flat: PropTypes.bool,
  full: PropTypes.bool,
  transparent: PropTypes.bool,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: 'leaf',
  size: 'default',
  flat: false,
  full: false,
  transparent: false,
  border: false,
  disabled: false,
};

export default Button;
