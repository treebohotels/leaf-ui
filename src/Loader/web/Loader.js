import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

const styles = {
  size(props) {
    if (props.size === 'small') {
      return props.theme.px(3);
    } else if (props.size === 'large') {
      return props.theme.px(6);
    }
    return '';
  },
};

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Loader = styled(
  ({
    color,
    size,
    ...props
  }) => <span {...props} />,
)`
  display: inline-block;
  animation: ${spin} 1s linear infinite;
  width: ${styles.size};
  height: ${styles.size};
  border-radius: 50%;
  border: ${(props) => props.size === 'small' ? '3px' : '4px'} solid ${(props) => props.theme.color.translucent};
  border-right-color: ${(props) => props.color ? props.theme.color[props.color] : ''};
  border-bottom-color: ${(props) => props.color ? props.theme.color[props.color] : ''};
  display: inline-block;
`;

Loader.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
  size: PropTypes.oneOf(['small', 'large']),
};

Loader.defaultProps = {
  color: 'primary',
  size: 'large',
};

export default Loader;
