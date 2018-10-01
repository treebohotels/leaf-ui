import styled from 'styled-components';
import PropTypes from 'prop-types';

const styles = {
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
};

const ImgContainer = styled.div`
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || ''};
  background-color: ${(props) => props.isLoaded ? props.theme.color.transparent : props.theme.color.translucent};
  position: ${(props) => props.isLoaded ? 'static' : 'initial'};
  border-radius: ${styles.borderRadius};
`;

ImgContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
  isLoaded: PropTypes.bool,
  borderRadius: PropTypes.string,
};

ImgContainer.defaultProps = {
  width: '',
  height: '',
  shape: 'sharpEdged',
  isLoaded: false,
};

export default ImgContainer;
