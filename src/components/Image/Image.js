import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import browserDimensions from '../../utils/browserDimensions';

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

const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.isLoaded ? 'static' : 'initial'};
  visibility: ${(props) => props.src ? 'initial' : 'hidden'};
  filter: ${(props) => props.grayscale ? 'grayscale(1)' : 'grayscale(0)'};
  background-color: ${(props) => props.isLoaded ? 'transparent' : props.theme.color.translucent};
  border-radius: ${styles.borderRadius};
`;

class Image extends Component {
  static getCdnUrl(src = '', aspectRatio) {
    return src ? `${src}?w=${aspectRatio.width * 100}&h=${aspectRatio.height * 100}&fm=pjpg&fit=crop&auto=compress` : src;
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

  storeContainerRef = (ref) => {
    if (ref) this.containerRef = ref;
  }

  render() {
    const { isLoaded, shouldFetch } = this.state;
    const src = !this.props.lazy || (shouldFetch && this.props.src) ? this.props.src : '';
    const {
      alt,
      aspectRatio,
      grayscale,
      shouldFetchFromCdn,
      width,
      height,
      shape,
    } = this.props;

    const imageSrc = shouldFetchFromCdn ? Image.getCdnUrl(src, aspectRatio) : src;

    return (
      <Img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        shape={shape}
        isLoaded={isLoaded}
        grayscale={grayscale}
        innerRef={this.storeContainerRef}
        onLoad={this.onImageLoaded}
      />
    );
  }
}

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  aspectRatio: PropTypes.object,
  grayscale: PropTypes.bool,
  lazy: PropTypes.bool,
  shouldFetchFromCdn: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  shape: PropTypes.string,
};

Image.defaultProps = {
  width: '100%',
  height: 'auto',
  aspectRatio: { width: 4, height: 3 },
  grayscale: false,
  lazy: true,
  shouldFetchFromCdn: true,
  src: '',
  alt: '',
  shape: '',
};

export default Image;
