import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import GalleryContainer from './GalleryContainer';

const Gallery = (props) => {
  const {
    width,
    height,
    children,
  } = props;

  const integerWidth = Number.parseInt(width, 10);
  const integerHeight = Number.parseInt(height, 10);

  return (
    <Fragment>
      <Helmet>
        <script async="" custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js">&nbsp;</script>
      </Helmet>
      <GalleryContainer
        width={integerWidth}
        height={integerHeight}
      >
        {children}
      </GalleryContainer>
    </Fragment>
  );
};

Gallery.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Gallery;
