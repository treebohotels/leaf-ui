import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const ButtonView = styled.View`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  ${(p) => ({
    filled: `
      background-color: ${p.theme.color[p.color]};
      border-color: ${p.theme.color[p.color]};
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
    bluntEdged: `
      border-radius: ${p.theme.borderRadius};
    `,
    sharpEdged: `
      border-radius: 0;
    `,
    capsular: `
      border-radius: ${p.theme.px(10)};
    `,
  }[p.shape])}
  ${(p) => ({
    small: `
      padding: ${p.theme.px(1)};
    `,
    medium: `
      padding: ${p.theme.px(2)};
    `,
    large: `
      padding: ${p.theme.px([2, 3])};
    `,
  }[p.size])}
  ${(p) => p.block ? 'align-self: stretch;' : 'align-self: flex-start;'}
  ${(p) => p.disabled ? 'opacity: 0.5;' : 'opacity: 1'}
  `;

const Button = ({
  color,
  kind,
  shape,
  size,
  block,
  disabled,
  children,
  ...restProps
}) => (
  Platform.OS === 'android' ? (
    <TouchableNativeFeedback disabled={disabled} {...restProps}>
      <ButtonView
        color={color}
        kind={kind}
        size={size}
        shape={shape}
        block={block}
        disabled={disabled}
      >
        {children}
      </ButtonView>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity disabled={disabled} {...restProps}>
      <ButtonView
        color={color}
        kind={kind}
        size={size}
        shape={shape}
        block={block}
        disabled={disabled}
      >
        {children}
      </ButtonView>
    </TouchableOpacity>
  )
);

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  color: PropTypes.string,
  kind: PropTypes.oneOf(['filled', 'outlined', 'transparent']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: 'green',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  block: false,
  disabled: false,
};

export default Button;
