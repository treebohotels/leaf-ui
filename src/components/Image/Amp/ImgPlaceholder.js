import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgPlaceholder = styled.div`
  background-color: ${(props) => props.theme.color.translucent};
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || ''};
`;

ImgPlaceholder.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ImgPlaceholder.defaultProps = {
  width: '',
  height: '',
};

export default ImgPlaceholder;
