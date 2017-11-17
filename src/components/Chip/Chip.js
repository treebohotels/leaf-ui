import PropTypes from 'prop-types';
import styled from 'styled-components';

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: ${(p) => p.theme.color[`${p.color}Lighter`]};
  border: 1px solid ${(p) => p.theme.color[p.color]};
  padding: ${(p) => p.theme.px([0.5, 1])};
  font-size: ${(p) => p.theme.fontSize.xs};
`;

Chip.propTypes = {
  color: PropTypes.string,
};

Chip.defaultProps = {
  color: 'leaf',
};

export default Chip;
