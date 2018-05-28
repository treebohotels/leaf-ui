import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled(
  ({
    width,
    height,
    className,
    ...props
  }) => {
    const carouselProps = {
      layout: 'responsive',
      controls: '',
      width: Number.parseInt(width, 10),
      height: Number.parseInt(height, 10),
      ...props,
    };
    if (props.type === 'carousel') {
      carouselProps.layout = 'fixed-height';
      carouselProps.width = 'auto';
    }
    return (
      <amp-carousel
        {...carouselProps}
      />
    );
  },
)`
  ${(props) => props.type === 'carousel' ? `
    .amp-carousel-button {
      display: none;
  }
  ` : ''}
`;

GalleryContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.oneOf(['carousel', 'slides']).isRequired,
};

export default GalleryContainer;
