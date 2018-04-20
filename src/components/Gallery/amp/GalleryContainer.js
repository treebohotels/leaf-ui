import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled(
  ({
    className,
    ...rest
  }) => <amp-carousel {...rest} />,
)`
  ${''}
`;

GalleryContainer.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['carousel', 'slides']),
  layout: PropTypes.oneOf(['fixed-height', 'responsive']),
};

GalleryContainer.defaultProps = {
  type: 'carousel',
  layout: 'responsive',
};

export default GalleryContainer;
