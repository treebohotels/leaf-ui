import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgPlaceholder = styled.div`
  background-color: ${(props) => props.theme.color.translucent};
`;

ImgPlaceholder.propTypes = {
  placeholder: PropTypes.string,
};

ImgPlaceholder.defaultProps = {
  placeholder: '',
};

export default ImgPlaceholder;
