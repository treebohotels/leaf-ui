import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled(
  ({
    className,
    ...props
  }) => {
    const carouselProps = {
      layout: 'responsive',
      ...props,
    };
    if (props.type === 'slides') carouselProps.controls = '';
    return (
      <amp-carousel
        {...carouselProps}
      />
    );
  },
)`
  ${''}
`;

GalleryContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.oneOf(['carousel', 'slides']).isRequired,
};

export default GalleryContainer;
