import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isInViewport from '../../utils/isInViewport';
import ImgContainer from './ImgContainer';
import Img from './Img';

class Image extends Component {
  static getCdnUrl(src = '', width = '', height = '') {
    const integerWidth = Number.parseInt(width, 10);
    const integerHeight = Number.parseInt(height, 10);
    const searchParams = [
      `w=${integerWidth || ''}`,
      `h=${integerHeight || ''}`,
      'fit=crop',
      'auto=compress',
    ].filter(Boolean).join('&');
    return src ? `${src}?${searchParams}` : src;
  }

  state = {
    shouldFetch: (typeof window === 'undefined'),
    isLoaded: (typeof window === 'undefined'),
  };

  componentDidMount() {
    const { getGalleryRef } = this.context;
    if (getGalleryRef && getGalleryRef()) {
      getGalleryRef().addEventListener('scroll', this.handleScroll, { passive: true });
      window.setTimeout(this.handleScroll);
    }
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.setTimeout(this.handleScroll);
  }

  componentDidUpdate() {
    const { isLoaded } = this.state;
    if (!isLoaded) window.setTimeout(this.handleScroll);
  }

  componentWillUnmount() {
    const { getGalleryRef } = this.context;
    if (getGalleryRef && getGalleryRef()) {
      getGalleryRef().removeEventListener('scroll', this.handleScroll, { passive: true });
    }
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
  }

  onImageLoaded = () => {
    this.setState({ isLoaded: true });
  }

  setImageRef = (ref) => {
    this.imageRef = ref;
  }

  handleScroll = () => {
    const { isLoaded } = this.state;
    const { getGalleryRef } = this.context;
    if (!isLoaded && isInViewport(this.imageRef)) {
      this.setState({ shouldFetch: true });
      if (getGalleryRef && getGalleryRef()) {
        getGalleryRef().removeEventListener('scroll', this.handleScroll, { passive: true });
      }
      window.removeEventListener('scroll', this.handleScroll, { passive: true });
    }
  }

  render() {
    const { isLoaded, shouldFetch } = this.state;
    const {
      className,
      src,
      alt,
      width,
      height,
      grayscale,
      shape,
      lazy,
      shouldFetchFromCdn,
    } = this.props;

    const source = !lazy || shouldFetch ? src : '';
    const imageSrc = shouldFetchFromCdn ? Image.getCdnUrl(source, width, height) : source;

    return (
      <ImgContainer
        className={className}
        width={width}
        height={height}
        shape={shape}
      >
        <Img
          innerRef={this.setImageRef}
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          grayscale={grayscale}
          isLoaded={isLoaded}
          onLoad={this.onImageLoaded}
        />
      </ImgContainer>
    );
  }
}

Image.contextTypes = {
  getGalleryRef: PropTypes.func,
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  grayscale: PropTypes.bool,
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
  lazy: PropTypes.bool,
  shouldFetchFromCdn: PropTypes.bool,
};

Image.defaultProps = {
  className: '',
  width: '',
  height: '',
  grayscale: false,
  shape: 'sharpEdged',
  lazy: true,
  shouldFetchFromCdn: true,
};

export default Image;
