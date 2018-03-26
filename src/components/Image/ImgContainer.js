import styled from 'styled-components';
import PropTypes from 'prop-types';

const styles = {
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    } else if (props.shape === 'sharpEdged') {
      return '0';
    } else if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
};

const ImgContainer = styled.div`
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || ''};
  background-color: ${(props) => props.isLoaded ? 'transparent' : props.theme.color.translucent};
  position: ${(props) => props.isLoaded ? 'static' : 'initial'};
  filter: ${(props) => props.grayscale ? 'grayscale(1)' : 'grayscale(0)'};
  border-radius: ${styles.borderRadius};
  display: inline-block;
`;

ImgContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  grayscale: PropTypes.bool,
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
  isLoaded: PropTypes.bool,
  borderRadius: PropTypes.string,
};

ImgContainer.defaultProps = {
  width: '',
  height: '',
  grayscale: false,
  shape: 'sharpEdged',
  isLoaded: false,
};

export default ImgContainer;
