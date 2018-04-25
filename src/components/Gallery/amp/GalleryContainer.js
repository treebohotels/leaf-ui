import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled(
  ({
    className,
    ...props
  }) => <amp-carousel layout="responsive" type="slides" {...props} />,
)`
  ${''}
`;

GalleryContainer.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

GalleryContainer.defaultProps = {
  width: '',
  height: '',
};

export default GalleryContainer;
