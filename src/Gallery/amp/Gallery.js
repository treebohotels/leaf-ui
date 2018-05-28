import React, { Fragment } from 'react';
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

  const integerWidth = Number.parseInt(width, 10);
  const integerHeight = Number.parseInt(height, 10);

  return (
    <Fragment>
      <Helmet script={ampCarousel} />
      <GalleryContainer
        width={integerWidth}
        height={integerHeight}
        type={type}
      >
        {children}
      </GalleryContainer>
    </Fragment>
  );
};

Gallery.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.oneOf(['carousel', 'slides']).isRequired,
  children: PropTypes.node,
};

export default Gallery;
