import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled(
  ({
    className,
    type,
    ...props
  }) => {
    const carouselProps = {
      layout: 'responsive',
      ...props,
    };
    if (type === 'slides') carouselProps.controls = '';
    return (
      <amp-carousel
        type={type}
        {...carouselProps}
      />
    );
  },
)`
  ${''}
`;

GalleryContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.oneOf(['carousel', 'slides']),
};

export default GalleryContainer;
