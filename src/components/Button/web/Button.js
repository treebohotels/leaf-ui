import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const styles = {
  color: (state) => (props) => {
    if (props.kind === 'filled') {
      return props.theme.color.white;
    } else if (props.kind === 'outlined') {
      if (state.hover) {
        return props.theme.color.white;
      }
      return props.theme.color[props.color];
    }
    return '';
  },
  background: (state) => (props) => {
    if (props.kind === 'filled') {
      if (state.hover) {
        return props.theme.color[`${props.color}Dark`];
      }
      return props.theme.color[props.color];
    } else if (props.kind === 'outlined') {
      if (state.hover) {
        return props.theme.color[props.color];
      }
      return 'transparent';
    }
    return '';
  },
  fontSize: () => (props) => {
    if (props.size === 'small') {
      return props.theme.fontSize.xs;
    } else if (props.size === 'medium') {
      return props.theme.fontSize.s;
    } else if (props.size === 'large') {
      return props.theme.fontSize.s;
    }
    return '';
  },
  padding: () => (props) => {
    if (props.size === 'small') {
      return props.theme.px([1, 2]);
    } else if (props.size === 'medium') {
      return props.theme.px([1.625, 2]);
    } else if (props.size === 'large') {
      return props.theme.px([2.25, 2]);
    }
    return '';
  },
  border: (state) => (props) => {
    if (props.kind === 'filled') {
      if (state.hover) {
        return `1px solid ${props.theme.color[`${props.color}Dark`]}`;
      }
      return `1px solid ${props.theme.color[props.color]}`;
    } else if (props.kind === 'outlined') {
      if (state.hover) {
        return `1px solid ${props.theme.color[props.color]}`;
      }
      return `1px solid ${props.theme.color[props.color]}`;
    }
    return '';
  },
  borderRadius: () => (props) => {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    } else if (props.shape === 'sharpEdged') {
      return '0';
    } else if (props.shape === 'capsular') {
      return props.theme.px(10);
    } else if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
  pointerEvents: () => (props) => {
    if (props.disabled) {
      return 'none';
    }
    return '';
  },
  opacity: () => (props) => {
    if (props.disabled) {
      return '0.5';
    }
    return '';
  },
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${styles.color({})};
  font-size: ${styles.fontSize({})};
  background: ${styles.background({})};
  padding: ${styles.padding({})};
  width: ${(props) => props.block ? '100%' : ''};
  border: ${styles.border({})};
  border-radius: ${styles.borderRadius({})};
  pointer-events: ${styles.pointerEvents({})};
  opacity: ${styles.opacity({})};

  &:hover {
    color: ${styles.color({ hover: true })};
    background: ${styles.background({ hover: true })};
    border: ${styles.border({ hover: true })};
  }
`;

const Button = (props, context) => (
  <StyledButton
    {...props}
    disabled={
      props.disabled || (
        props.type === 'submit' &&
        context.formik &&
        !context.formik.isValid
      )
    }
  />
);

Button.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(['filled', 'outlined']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  block: false,
  disabled: false,
};

Button.contextTypes = {
  formik: PropTypes.object,
};

export default Button;
