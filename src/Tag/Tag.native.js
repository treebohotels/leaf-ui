import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const styles = {
  background(props) {
    if (props.kind === 'filled') return props.theme.color[props.color];
    return props.theme.color[`${props.color}Lighter`];
  },
  padding(props) {
    if (props.size === 'small') return props.theme.px([0.5, 1]);
    return props.theme.px([1, 1.5]);
  },
  borderColor(props) {
    return props.theme.color[props.color];
  },
  borderRadius(props) {
    if (props.shape === 'capsular') {
      return props.theme.px(10);
    }
    if (props.shape === 'sharpEdged') {
      return props.theme.px(0);
    }
    return props.theme.borderRadius;
  },
};

const TagContainer = styled.View`
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  border-radius: ${styles.borderRadius};
  padding: ${styles.padding};
  background: ${styles.background};
  border-width: 1;
  border-color: ${styles.borderColor};
`;

const Tag = ({
  color,
  kind,
  size,
  children,
  shape,
  ...props
}) => (
  <TagContainer
    color={color}
    kind={kind}
    size={size}
    shape={shape}
    {...props}
  >
    <Text
      color={{
        filled: 'white',
        outlined: color,
      }[kind]}
      size={{
        small: 'xxs',
        medium: 'xs',
      }[size]}
      weight="medium"
    >
      {size === 'small' ? children.toUpperCase() : children}
    </Text>
  </TagContainer>
);

Tag.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium']),
  shape: PropTypes.oneOf(['bluntEdged', 'capsular', 'sharpEdged']),
  children: PropTypes.string,
};

Tag.defaultProps = {
  color: 'primary',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
};

export default Tag;
