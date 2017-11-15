import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  background: ${(props) => props.theme.color[props.backgroundColor]};
  border-radius: ${(props) => props.theme.border.radius};
  box-shadow: ${(props) => props.theme.shadow[props.elevation]};
`;

Card.propTypes = {
  backgroundColor: PropTypes.string,
  elevation: PropTypes.number,
};

Card.defaultProps = {
  backgroundColor: 'white',
  elevation: 0,
};

export default Card;
