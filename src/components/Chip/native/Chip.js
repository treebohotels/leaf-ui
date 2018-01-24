import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Text from '../../Text/native';

const ChipContainer = styled.View`
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.color[`${p.color}Lighter`]};
  border-radius: 100px;
  border-width: 1px;
  border-color: ${(p) => p.theme.color[p.color]}
  padding: ${(p) => p.theme.px([1, 1.5])};
`;

const Chip = ({ style, color, fontFamily, children }) => (
  <ChipContainer style={style} color={color}>
    <Text color={color} size="xs" weight="regular" family={fontFamily}>
      {children}
    </Text>
  </ChipContainer>
);

Chip.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  children: PropTypes.string,
};

Chip.defaultProps = {
  color: 'primary',
  fontFamily: '',
  children: '',
};

export default Chip;
