import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  background: ${(p) => p.theme.color[p.color]};
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: ${(p) => p.theme.boxShadow[p.elevation]};
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
