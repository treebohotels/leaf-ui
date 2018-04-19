import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from './Img';
import ImgPlaceholder from './ImgPlaceholder';

export default class Image extends Component {
  static getCdnUrl(src = '', width = '', height = '') {
    const searchParams = [
      `w=${width || ''}`,
      `h=${height || ''}`,
      'fit=crop',
      'auto=compress',
    ].filter(Boolean).join('&');
    return src ? `${src}?${searchParams}` : src;
  }

  render() {
    const {
      src,
      alt,
      width,
      height,
      layout,
      shape,
      grayscale,
    } = this.props;

    const integerWidth = Number.parseInt(width, 10);
    const integerHeight = Number.parseInt(height, 10);
    const imageSrc = Image.getCdnUrl(src, integerWidth, integerHeight);

    return (
      <Img
        src={imageSrc}
        alt={alt}
        width={integerWidth}
        height={integerHeight}
        layout={layout}
        grayscale={grayscale}
        shape={shape}
      >
        <ImgPlaceholder />
      </Img>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  layout: PropTypes.oneOf(['fixed-height', 'responsive']),
  grayscale: PropTypes.bool,
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
};

Image.defaultProps = {
  width: '',
  height: '',
  layout: 'responsive',
  grayscale: false,
  shape: 'sharpEdged',
};
