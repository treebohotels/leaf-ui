import React from 'react';
import styled from 'styled-components';

const styles = {
  color(props) {
    if (props.disabled) {
      return props.theme.color.grey;
    }
    return props.theme.color[props.color];
  },
  pointerEvents(props) {
    if (props.disabled) {
      return 'none';
    }
    return '';
  },
  hover: {
    color(props) {
      if (props.disabled) {
        return props.theme.color.grey;
      }
      return props.theme.color[`${props.color}Dark`];
    },
  },
  focus: {
    color(props) {
      if (props.disabled) {
        return props.theme.color.grey;
      }
      return props.theme.color[`${props.color}Dark`];
    },
  },
};

const Link = styled(
  ({
    color,
    children,
    ...props
  }) => (
    <a {...props}>
      {children}
    </a>
  ),
)`
  color: ${styles.color};
  text-decoration: none;
  cursor: pointer;
  pointer-events: ${styles.pointerEvents};

  &:hover {
    color: ${styles.hover.color};
  }

  &:focus {
    outline: none;
    text-decoration: underline;
    color: ${styles.focus.color};
  }
`;

Link.defaultProps = {
  color: 'blue',
};

export default Link;
