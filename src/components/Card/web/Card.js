import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  background: ${(props) => props.theme.color[props.color]};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow[props.elevation]};
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
