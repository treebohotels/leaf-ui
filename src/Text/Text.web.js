import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const Text = styled(
  ({
    component,
    color,
    size,
    weight,
    family,
    align,
    truncate,
    children,
    ...props
  }) => React.createElement(component, props, children),
)`
  color: ${(props) => props.color ? props.theme.color[props.color] : ''};
  font-size: ${(props) => props.size ? props.theme.fontSize[props.size] : ''};
  font-weight: ${(props) => props.weight ? props.theme.fontWeight[props.weight] : ''};
  font-family: ${(props) => props.family ? props.theme.fontFamily[props.family] : ''};
  line-height: ${(props) => props.component === 'p' ? '1.5' : ''};
  text-align: ${(props) => props.align || ''};
  overflow: ${(props) => props.truncate ? 'hidden' : ''};
  white-space: ${(props) => props.truncate ? 'nowrap' : ''};
  text-overflow: ${(props) => props.truncate ? 'ellipsis' : ''};
  padding: 0;
  margin: 0;
`;

Text.propTypes = {
  component: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(theme.color)),
  size: PropTypes.oneOf(Object.keys(theme.fontSize)),
  weight: PropTypes.oneOf(Object.keys(theme.fontWeight)),
  family: PropTypes.oneOf(Object.keys(theme.fontFamily)),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  truncate: PropTypes.bool,
};

Text.defaultProps = {
  component: 'div',
};

export default Text;
