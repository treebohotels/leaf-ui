import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spacer = styled(({
  children,
  ...props
}) => React.cloneElement(children, props))`
  ${(props) => props.margin || props.margin === 0 ? `margin: ${props.theme.px(props.margin)} !important;` : ''};
  ${(props) => props.padding || props.padding === 0 ? `padding: ${props.theme.px(props.padding)} !important;` : ''};
  ${(props) => props.maxWidth ? `max-width: ${props.maxWidth} !important;` : ''};
  ${(props) => props.width ? `width: ${props.width} !important;` : ''};
  ${(props) => props.minWidth ? `min-width: ${props.minWidth} !important;` : ''};
  ${(props) => props.minHeight ? `min-height: ${props.minHeight} !important;` : ''};
  ${(props) => props.height ? `height: ${props.height} !important;` : ''};
  ${(props) => props.maxHeight ? `max-height: ${props.maxHeight} !important;` : ''};
`;

Spacer.propTypes = {
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  ]),
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
};

export default Spacer;
