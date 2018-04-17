import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spacer from '../Spacer';
import Flex from '../Flex';

const GalleryContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow-x: ${(props) => props.scrollDirection === 'horizontal' ? 'scroll' : 'hidden'};
  overflow-y: ${(props) => props.scrollDirection === 'vertical' ? 'scroll' : 'hidden'};
  display: ${(props) => props.scrollDirection === 'horizontal' ? 'flex' : ''};

  &::-webkit-scrollbar {
    display: none;
  }
`;

class Gallery extends Component {
  state = {
    isGalleryRefSet: false,
  }

  getChildContext() {
    return {
      getGalleryRef: this.getGalleryRef,
    };
  }

  setGalleryRef = (ref) => {
    this.galleryRef = ref;
    this.setState({ isGalleryRefSet: true });
  }

  getGalleryRef = () => this.galleryRef

  render() {
    const { isGalleryRefSet } = this.state;
    const {
      className,
      width,
      height,
      scrollDirection,
      children,
    } = this.props;

    return (
      <GalleryContainer
        className={className}
        width={width}
        height={height}
        scrollDirection={scrollDirection}
        innerRef={this.setGalleryRef}
      >
        {
          isGalleryRefSet ? React.Children.map(children, (child) => (
            <Spacer key={child} margin={scrollDirection === 'horizontal' ? [0, 0.5, 0, 0] : [0, 0, 0.5, 0]}>
              <Flex display="inline-flex">
                {child}
              </Flex>
            </Spacer>
          )) : null
        }
      </GalleryContainer>
    );
  }
}

Gallery.childContextTypes = {
  getGalleryRef: PropTypes.func,
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  scrollDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  children: PropTypes.node,
};

Gallery.defaultProps = {
  width: '',
  height: '',
  scrollDirection: 'horizontal',
};

export default Gallery;
