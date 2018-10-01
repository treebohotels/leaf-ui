import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const styles = {
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
};

const Img = styled(
  ({
    shape,
    grayscale,
    borderRadius,
    className,
    ...props
  }) => <amp-img class={className} {...props} />,
)`
  filter: ${(props) => props.grayscale ? 'grayscale(1)' : 'grayscale(0)'};
  border-radius: ${styles.borderRadius};
`;

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  layout: PropTypes.oneOf(['responsive']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
  grayscale: PropTypes.bool,
  borderRadius: PropTypes.string,
};

Img.defaultProps = {
  shape: 'sharpEdged',
  grayscale: false,
};

export default Img;
