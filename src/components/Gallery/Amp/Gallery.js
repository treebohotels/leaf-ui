import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import GalleryContainer from './GalleryContainer';

const Gallery = (props) => {
  const { width, height, type, layout, children } = props;
  return (
    <div>
      <Helmet>
        <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script> { /* eslint-disable-line react/self-closing-comp */ }
      </Helmet>
      <GalleryContainer
        width={width}
        height={height}
        type={type}
        layout={layout}
      >
        {children}
      </GalleryContainer>
    </div>
  );
};

Gallery.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['carousel', 'slides']),
  layout: PropTypes.oneOf(['fixed-height', 'responsive']),
  children: PropTypes.node,
};

Gallery.defaultProps = {
  type: 'slides',
  layout: 'responsive',
};

export default Gallery;
