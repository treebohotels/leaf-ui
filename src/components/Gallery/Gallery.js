import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled.div`
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
    const { className, scrollDirection, children } = this.props;
    return (
      <GalleryContainer
        className={className}
        scrollDirection={scrollDirection}
        innerRef={this.setGalleryRef}
      >
        {children}
      </GalleryContainer>
    );
  }
}

Gallery.childContextTypes = {
  subscribeToGalleryRef: PropTypes.node,
};

Gallery.propTypes = {
  className: PropTypes.string,
  scrollDirection: PropTypes.string,
  children: PropTypes.node,
};

Gallery.defaultProps = {
  scrollDirection: 'horizontal',
};

export default Gallery;
