import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button.attrs({
  disabled: (p) => p.disabled,
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(p) => ({
    solid: `
      color: ${p.theme.color.white};
      background: ${p.theme.color[p.color]};
      border: 1px solid ${p.theme.color[p.color]};

      &:hover {
        background: ${p.theme.color[`${p.color}Dark`]};
      }
    `,
    outlined: `
      color: ${p.theme.color[p.color]};
      background: transparent;
      border: 1px solid ${p.theme.color[p.color]};

      &:hover {
        color: ${p.theme.color[`${p.color}Dark`]};
        background: ${p.theme.color[`${p.color}Lighter`]};
        border-color: ${p.theme.color[`${p.color}Dark`]};
      }
    `,
    transparent: `
      color: ${p.theme.color[p.color]};
      background: transparent;
      border: 1px solid transparent;

      &:hover {
        color: ${p.theme.color.white};
        background: ${p.theme.color[p.color]};
      }
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
    circular: `
      border-radius: 100%;
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
      padding: ${p.theme.px(2, 3)};
    `,
  }[p.size])}
  ${(p) => (p.block ? 'width: 100%;' : '')}
  ${(p) => (p.disabled ? `
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
