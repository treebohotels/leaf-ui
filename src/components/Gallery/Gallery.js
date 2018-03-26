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
  white-space: ${(props) => props.scrollDirection === 'horizontal' ? 'nowrap' : 'initial'};

  &::-webkit-scrollbar {
    display: none;
  }
`;

class Gallery extends Component {
  getChildContext() {
    return {
      subscribeToGalleryRef: this.subscribeToGalleryRef,
    };
  }

  setGalleryRef = (ref) => {
    this.listeners = this.listeners.filter((listener) => {
      listener(ref);
      return false;
    });
  }

  subscribeToGalleryRef = (listener) => {
    this.listeners.push(listener);
  }

  listeners = [];

  render() {
    const {
      width,
      height,
      scrollDirection,
      children,
    } = this.props;
    return (
      <GalleryContainer
        width={width}
        height={height}
        scrollDirection={scrollDirection}
        innerRef={this.setGalleryRef}
      >
        {
          React.Children.map(children, (child) => (
            <Spacer margin={[0, 0.5, 0, 0]}>
              <Flex display="inline-block">
                {child}
              </Flex>
            </Spacer>
          ))
        }
      </GalleryContainer>
    );
  }
}

Gallery.childContextTypes = {
  subscribeToGalleryRef: PropTypes.node,
};

Gallery.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  scrollDirection: PropTypes.string,
  children: PropTypes.node,
};

Gallery.defaultProps = {
  width: '',
  height: '',
  scrollDirection: 'horizontal',
};

export default Gallery;
