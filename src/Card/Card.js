import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.section`
  background: ${(props) => props.theme.color[props.color]};
  border-radius: ${(props) => props.theme.border.radius};
  box-shadow: ${(props) => props.theme.shadow[props.elevation]};
`;

Card.propTypes = {
  color: PropTypes.string,
  elevation: PropTypes.number,
};

Card.defaultProps = {
  color: 'white',
  elevation: 0,
};

export default Card;
