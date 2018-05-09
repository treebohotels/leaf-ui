import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const Border = styled(
  ({
    borderWidth,
    borderStyle,
    borderColor,
    borderRadius,
    children,
    ...props
  }) => React.cloneElement(children, props),
)`
  border-width: ${(props) => props.borderWidth ? `${props.theme.px(props.borderWidth)} !important;` : ''};
  border-style: ${(props) => props.borderStyle ? `${props.borderStyle} !important;` : ''};
  border-color: ${(props) => props.borderColor ? `${props.theme.color[props.borderColor]} !important;` : ''};
  border-radius: ${(props) => props.borderRadius ? `${props.theme.px(props.borderRadius)} !important;` : ''};
`;

Border.propTypes = {
  borderWidth: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  borderStyle: PropTypes.oneOf([
    'none',
    'hidden',
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
    'initial',
    'inherit',
  ]),
  borderColor: PropTypes.oneOf(Object.keys(theme.color)),
  borderRadius: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
};

export default Border;
