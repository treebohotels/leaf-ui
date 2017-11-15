import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button.attrs({
  disabled: (props) => props.disabled,
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) => ({
    solid: `
      color: ${props.theme.color.white};
      background: ${props.theme.color[props.color]};
      border: 1px solid ${props.theme.color[props.color]};

      &:hover {
        background: ${props.theme.color[`${props.color}Dark`]};
      }
    `,
    outlined: `
      color: ${props.theme.color[props.color]};
      background: transparent;
      border: 1px solid ${props.theme.color[props.color]};

      &:hover {
        color: ${props.theme.color[`${props.color}Dark`]};
        background: ${props.theme.color[`${props.color}Lighter`]};
        border-color: ${props.theme.color[`${props.color}Dark`]};
      }
    `,
    transparent: `
      color: ${props.theme.color[props.color]};
      background: transparent;
      border: 1px solid transparent;

      &:hover {
        color: ${props.theme.color.white};
        background: ${props.theme.color[props.color]};
      }
    `,
  }[props.kind])}
  ${(props) => ({
    default: `
      border-radius: ${props.theme.border.radius};
    `,
    flat: `
      border-radius: 0;
    `,
    rounded: `
      border-radius: ${props.theme.px(10)};
    `,
    circular: `
      border-radius: 100%;
    `,
  }[props.shape])}
  ${(props) => ({
    small: `
      padding: ${props.theme.px(1)};
    `,
    regular: `
      padding: ${props.theme.px(2)};
    `,
    large: `
      padding: ${props.theme.px([2, 3])};
    `,
  }[props.size])}
  ${(props) => (props.block ? 'width: 100%;' : '')}
  ${(props) => (props.disabled ? `
    pointer-events: none;
    opacity: 0.5;
  ` : '')}
  `;

Button.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(['solid', 'outlined', 'transparent']),
  shape: PropTypes.oneOf(['default', 'flat', 'rounded', 'circular']),
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: 'leaf',
  kind: 'solid',
  size: 'regular',
  shape: 'default',
  block: false,
  disabled: false,
};

export default Button;
