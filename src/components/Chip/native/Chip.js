import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../Text/native';

const ChipContainer = styled.View`
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  ${(p) => ({
    small: `
      padding: ${p.theme.px(0.5)};
    `,
    medium: `
      padding: ${p.theme.px([1, 1.5])};
    `,
  }[p.size])}
  ${(p) => ({
    filled: `
      background: ${p.theme.color[p.color]};
    `,
    outlined: `
      background: ${p.theme.color[`${p.color}Lighter`]};
    `,
  }[p.kind])}
  border-radius: 100px;
  border-width: 1px;
  border-color: ${(p) => p.theme.color[p.color]};
  `;

const Chip = ({ style, color, kind, size, children }) => (
  <ChipContainer
    style={style}
    color={color}
    kind={kind}
    size={size}
  >
    <Text
      color={{
        filled: 'white',
        outlined: color,
      }[kind]}
      size={{
        small: 'xxs',
        medium: 'xs',
      }[size]}
    >
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
  kind: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium']),
  children: PropTypes.string,
};

Chip.defaultProps = {
  color: 'primary',
  kind: 'outlined',
  size: 'medium',
};

export default Chip;
