import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';
import ImgPlaceholder from './ImgPlaceholder';

const Image = (props) => {
  const {
    src,
    alt,
    width,
    height,
    shape,
    grayscale,
  } = props;

  return (
    <Img
      src={src}
      alt={alt}
      width={width}
      height={height}
      grayscale={grayscale}
      shape={shape}
    >
      <ImgPlaceholder
        width={width}
        height={height}
      />
    </Img>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  grayscale: PropTypes.bool,
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
};

Image.defaultProps = {
  width: '',
  height: '',
  grayscale: false,
  shape: 'sharpEdged',
};

export default Image;
