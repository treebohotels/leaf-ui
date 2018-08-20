import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

const styles = {
  color(props) {
    return props.theme.color[props.color];
  },
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

const StyledLoader = styled(
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
  border: 4px solid ${(props) => props.theme.color.translucent};
  border-right-color: ${styles.color};
  border-bottom-color: ${styles.color};
  display: inline-block;
`;

const LoaderContainer = styled.span`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  cursor: not-allowed;
`;

const Loader = (props) => (
  <LoaderContainer>
    <StyledLoader {...props} />
  </LoaderContainer>
);

Loader.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
  size: PropTypes.oneOf(['small', 'large']),
};

Loader.defaultProps = {
  color: 'primary',
  size: 'large',
};

export default Loader;
