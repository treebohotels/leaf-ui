import PropTypes from 'prop-types';
import styled from 'styled-components';

const boxShadow = [
  '0px 0px',
  '0px 1px 3px rgba(0,0,0,0.1)',
  '0px 3px 6px rgba(0,0,0,0.2)',
  '0px 10px 20px rgba(0,0,0,0.3)',
  '0px 14px 28px rgba(0,0,0,0.4)',
  '0px 19px 38px rgba(0,0,0,0.5)',
];

const elevation = [0, 4, 12, 16, 32, 40];

const Card = styled.View`
  background: ${(props) => props.theme.color[props.color]};
  border-radius: ${(props) => props.theme.borderRadius};
  elevation: ${(props) => elevation[props.elevation]};
  box-shadow: ${(props) => boxShadow[props.elevation]};
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
