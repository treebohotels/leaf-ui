import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid ${(p) => p.theme.color[p.color]};
  ${(p) => ({
    filled: `
      color: ${p.theme.color.white};
      background: ${p.theme.color[p.color]};
    `,
    outlined: `
      color: ${p.theme.color[p.color]};
      background: ${p.theme.color[`${p.color}Lighter`]};
    `,
  }[p.kind])}
  ${(p) => ({
    small: `
      font-size: ${p.theme.fontSize.xxs};
      padding: ${p.theme.px(0.5)};
    `,
    medium: `
      font-size: ${p.theme.fontSize.xs};
      padding: ${p.theme.px([1, 1.5])};
    `,
  }[p.size])}
  `;

Tag.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium']),
};

Tag.defaultProps = {
  color: 'primary',
  kind: 'outlined',
  size: 'medium',
};

export default Tag;
