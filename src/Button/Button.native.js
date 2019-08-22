import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import theme from '../theme';
import Text from '../Text';

const styles = {
  buttonColor(props) {
    if (props.kind === 'filled') {
      if (props.disabled) {
        return props.theme.color.grey;
      }
      return props.theme.color[props.color];
    }
    if (props.kind === 'outlined') {
      if (props.disabled) {
        return props.theme.color.greyLight;
      }
      return props.theme.color.white;
    }
    return props.theme.color.white;
  },
  borderColor(props) {
    if (props.kind === 'filled') {
      if (props.disabled) {
        return props.theme.color.grey;
      }
      return props.theme.color[props.color];
    }
    if (props.kind === 'outlined') {
      if (props.disabled) {
        return props.theme.color.grey;
      }
      return props.theme.color[props.color];
    }
    return props.theme.color[props.color];
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
  textColor(props) {
    if (props.kind === 'filled') {
      return props.theme.color.white;
    }
    if (props.kind === 'outlined') {
      if (props.disabled) {
        return props.theme.color.grey;
      }
      return props.theme.color[props.color];
    }
    return props.theme.color[props.color];
  },
};

const StyledButton = styled.TouchableOpacity`
  background-color: ${styles.buttonColor};
  align-items: center;
  justify-content: center;
  padding: ${styles.padding};
  border-width: 1px;
  border-style: solid;
  border-color: ${styles.borderColor};
  border-radius: ${styles.borderRadius};
`;

const StyledText = styled((props) => <Text {...props} />)`
  color: ${styles.textColor};
`;

const Button = ({
  color,
  kind,
  shape,
  size,
  block,
  disabled,
  isLoading,
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
    activeOpacity={0.8}
    {...props}
  >
    {
      isLoading ? (
        <ActivityIndicator
          color={kind === 'outlined' ? theme.color[color] : theme.color.white}
        />
      ) : (
        <StyledText
          kind={kind}
          color={color}
          disabled={disabled}
          size={size === 'small' ? 'xs' : 's'}
          weight="medium"
        >
          {children.toUpperCase()}
        </StyledText>
      )
    }
  </StyledButton>
);

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  block: false,
  disabled: false,
  isLoading: false,
};

export default Button;
