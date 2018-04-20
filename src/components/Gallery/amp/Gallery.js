import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import GalleryContainer from './GalleryContainer';

const Gallery = (props) => {
  const {
    width,
    height,
    type,
    layout,
    children,
  } = props;

  const integerWidth = Number.parseInt(width, 10);
  const integerHeight = Number.parseInt(height, 10);

  return (
    <Fragment>
      <Helmet>
        <script async="" custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script> { /* eslint-disable-line react/self-closing-comp */ }
      </Helmet>
      <GalleryContainer
        width={integerWidth}
        height={integerHeight}
        type={type}
        layout={layout}
      >
        {children}
      </GalleryContainer>
    </Fragment>
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
