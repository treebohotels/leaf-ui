import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from './Img';
import browserDimensions from '../../utils/browserDimensions';

class Image extends Component {
  static getCdnUrl(src = '', width, height) {
    return src ? `${src}?w=${width * 100}&h=${height * 100}&fm=pjpg&fit=crop&auto=compress` : src;
  }

  state = {
    shouldFetch: (typeof window === 'undefined'),
    isLoaded: (typeof window === 'undefined'),
  };

  componentDidMount() {
    window.setTimeout(this.handleScroll);
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentDidUpdate() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      window.setTimeout(this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
  }

  onImageLoaded = () => {
    this.setState({ isLoaded: true });
  }

  setImageRef = (ref) => {
    this.containerRef = ref;
  }

  handleScroll = () => {
    const { isLoaded } = this.state;
    const boundingClientRect = this.containerRef.getBoundingClientRect();
    const isInViewport =
      (boundingClientRect.top <= browserDimensions().height && boundingClientRect.bottom >= 0);
    if (!isLoaded && isInViewport) {
      this.setState({ shouldFetch: true });
      window.removeEventListener('scroll', this.handleScroll, { passive: true });
    }
  }

  render() {
    const { isLoaded, shouldFetch } = this.state;
    const {
      alt,
      grayscale,
      shouldFetchFromCdn,
      width,
      height,
      shape,
      lazy,
      src,
    } = this.props;

    const source = !lazy || shouldFetch ? src : '';
    const imageSrc = shouldFetchFromCdn ? Image.getCdnUrl(source, width, height) : source;

    return (
      <Img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        shape={shape}
        isLoaded={isLoaded}
        grayscale={grayscale}
        innerRef={this.setImageRef}
        onLoad={this.onImageLoaded}
      />
    );
  }
}

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  grayscale: PropTypes.bool,
  lazy: PropTypes.bool,
  shouldFetchFromCdn: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
};

Image.defaultProps = {
  width: '100%',
  height: 'auto',
  grayscale: false,
  lazy: true,
  shouldFetchFromCdn: true,
  src: '',
  alt: '',
  shape: '',
};

export default Image;
