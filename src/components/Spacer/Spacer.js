import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spacer = styled(({
  children,
  ...props
}) => React.cloneElement(children, props))`
  margin: ${(props) => props.margin || props.margin === 0 ? `${props.theme.px(props.margin)} !important;` : ''};
  padding: ${(props) => props.padding || props.padding === 0 ? `${props.theme.px(props.padding)} !important;` : ''};
  max-width: ${(props) => props.maxWidth ? `${props.maxWidth} !important;` : ''};
  width: ${(props) => props.width ? `${props.width} !important;` : ''};
  min-width: ${(props) => props.minWidth ? `${props.minWidth} !important;` : ''};
  min-height: ${(props) => props.minHeight ? `${props.minHeight} !important;` : ''};
  height: ${(props) => props.height ? `${props.height} !important;` : ''};
  max-height: ${(props) => props.maxHeight ? `${props.maxHeight} !important;` : ''};
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
