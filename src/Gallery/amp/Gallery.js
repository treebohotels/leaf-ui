import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import GalleryContainer from './GalleryContainer';

const ampCarousel = [{
  async: '',
  'custom-element': 'amp-carousel',
  src: 'https://cdn.ampproject.org/v0/amp-carousel-0.1.js',
}];

const Gallery = (props) => {
  const {
    width,
    height,
    type,
    children,
  } = props;

  return (
    <React.Fragment>
      <Helmet script={ampCarousel} />
      <GalleryContainer
        width={width}
        height={height}
        type={type}
      >
        {children}
      </GalleryContainer>
    </React.Fragment>
  );
};

Gallery.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.oneOf(['carousel', 'slides']).isRequired,
  children: PropTypes.node,
};

export default Gallery;
