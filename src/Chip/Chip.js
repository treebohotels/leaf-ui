import PropTypes from 'prop-types';
import styled from 'styled-components';

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: ${(props) => props.theme.color[`${props.color}Lighter`]};
  border: 1px solid ${(props) => props.theme.color[props.color]};
  padding: ${(props) => props.theme.px([0.5, 1])};
  font-size: ${(props) => props.theme.font.size.xs};
`;

Chip.propTypes = {
  color: PropTypes.string,
};

Chip.defaultProps = {
  color: 'leaf',
};

export default Chip;
