import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../Text/native';

const styles = {
  background(props) {
    if (props.kind === 'filled') return props.theme.color[props.color];
    return props.theme.color[`${props.color}Lighter`];
  },
  padding(props) {
    if (props.size === 'small') return props.theme.px([0.15, 0.5, 0.25, 0.5]);
    return props.theme.px([1, 1.5]);
  },
  borderColor(props) {
    return props.theme.color[props.color];
  },
  borderRadius(props) {
    if (props.shape === 'capsular') return props.theme.px(10);
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
  border-width: 0.8;
  border-color: ${styles.borderColor};
`;

const Tag = ({ color, kind, size, children, shape }) => (
  <TagContainer
    color={color}
    kind={kind}
    size={size}
    shape={shape}
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
    >
      {children}
    </Text>
  </TagContainer>
);

Tag.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium']),
  shape: PropTypes.oneOf(['bluntEdged', 'capsular']),
  children: PropTypes.string,
};

Tag.defaultProps = {
  color: 'primary',
  kind: 'outlined',
  size: 'medium',
  shape: 'capsular',
};

export default Tag;
