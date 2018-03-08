import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.Text`
  ${(p) => p.color ? `color: ${p.theme.color[p.color]};` : ''}
  ${(p) => p.size ? `font-size: ${p.theme.fontSize[p.size]};` : ''}
  ${(p) => p.weight ? `font-weight: ${p.theme.fontWeight[p.weight]};` : ''}
  ${(p) => {
    if (p.family) {
      return `font-family: ${p.family}`;
    }
    return `font-family: ${p.theme.fontFamily[p.weight]}`;
  }}
  `;

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  family: PropTypes.string,
  truncate: PropTypes.bool,
};

Text.defaultProps = {
  size: 's',
  weight: 'normal',
};

export default Text;
