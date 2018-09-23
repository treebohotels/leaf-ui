import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import Text from '../../Text/native';

const styles = {
  buttonColor(props) {
    if (props.kind === 'filled') {
      return props.theme.color[props.color];
    }
    return props.theme.color.white;
  },
  padding(props) {
    if (props.size === 'small') {
      return props.theme.px([1, 2]);
    }
    if (props.size === 'medium') {
      return props.theme.px([1.5, 2]);
    }
    return props.theme.px([2]);
  },
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    return props.theme.px(10);
  },
};

const StyledButton = styled.TouchableOpacity`
  background-color: ${styles.buttonColor};
  align-items: center;
  justify-content: center;
  padding: ${styles.padding};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.color[props.color]};
  border-radius: ${styles.borderRadius};
  opacity: ${(props) => props.disabled ? '0.5' : '1'};
`;

const Button = ({
  color,
  kind,
  shape,
  size,
  block,
  disabled,
  children,
  ...props
}) => (
  <StyledButton
    color={color}
    kind={kind}
    size={size}
    shape={shape}
    block={block}
    disabled={disabled}
    {...props}
  >
    <Text
      color={kind === 'filled' ? 'white' : 'primary'}
      size={size === 'small' ? 'xs' : 's'}
      weight="medium"
    >
      {children.toUpperCase()}
    </Text>
  </StyledButton>
);

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  block: false,
  disabled: false,
};

export default Button;
