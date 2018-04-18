import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const styles = {
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    } else if (props.shape === 'sharpEdged') {
      return '0';
    } else if (props.shape === 'circular') {
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
    ...rest
  }) => <amp-img {...rest} />,
).attrs({
  className: 'amp-img',
})`
  filter: ${(props) => props.grayscale ? 'grayscale(1)' : 'grayscale(0)'};
  border-radius: ${styles.borderRadius};
`;

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
  grayscale: PropTypes.bool,
  borderRadius: PropTypes.string,
};

Img.defaultProps = {
  width: '',
  height: '',
  grayscale: false,
  shape: 'sharpEdged',
};

export default Img;
