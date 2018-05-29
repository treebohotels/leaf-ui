import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled(
  ({
    className,
    ...props
  }) => {
    const carouselProps = {
      width: Number.parseInt(props.width, 10),
      height: Number.parseInt(props.height, 10),
      layout: 'responsive',
      controls: '',
      class: className,
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
  ${(props) => props.type === 'carousel' && `
    .amp-carousel-button {
      display: none;
    }
  `}
`;

GalleryContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.oneOf(['carousel', 'slides']).isRequired,
};

export default GalleryContainer;
