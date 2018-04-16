import PropTypes from 'prop-types';
import styled from 'styled-components';

/* stylelint-disable block-no-empty */
const GalleryContainer = styled('amp-carousel').attrs({
  className: 'amp-carousel',
})``;

GalleryContainer.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['carousel', 'slides']),
  layout: PropTypes.oneOf(['fixed-height', 'responsive']),
};

GalleryContainer.defaultProps = {
  type: 'carousel',
  layout: 'responsive',
};

export default GalleryContainer;
