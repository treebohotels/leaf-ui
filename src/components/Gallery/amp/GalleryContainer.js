import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryContainer = styled(
  ({
    className,
    ...rest
  }) => <amp-carousel layout="responsive" type="slides" {...rest} />,
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
