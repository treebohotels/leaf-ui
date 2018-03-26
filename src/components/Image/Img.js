import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.img`
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || ''};
  position: ${(props) => props.isLoaded ? 'static' : 'initial'};
  visibility: ${(props) => props.src ? 'initial' : 'hidden'};
  filter: ${(props) => props.grayscale ? 'grayscale(1)' : 'grayscale(0)'};
`;

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  grayscale: PropTypes.bool,
  isLoaded: PropTypes.bool,
};

Img.defaultProps = {
  width: '',
  height: '',
  grayscale: false,
  isLoaded: false,
};

export default Img;
