import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spacer = styled(({
  children,
  margin,
  padding,
  maxWidth,
  width,
  minWidth,
  maxHeight,
  height,
  minHeight,
  ...props
}) => React.cloneElement(children, props))`
  margin: ${(props) => props.margin || props.margin === 0 ? `${props.theme.px(props.margin)} !important;` : ''};
  padding: ${(props) => props.padding || props.padding === 0 ? `${props.theme.px(props.padding)} !important;` : ''};
  max-width: ${(props) => props.maxWidth ? `${props.theme.px(props.maxWidth)} !important;` : ''};
  width: ${(props) => props.width ? `${props.theme.px(props.width)} !important;` : ''};
  min-width: ${(props) => props.minWidth ? `${props.theme.px(props.minWidth)} !important;` : ''};
  min-height: ${(props) => props.minHeight ? `${props.theme.px(props.minHeight)} !important;` : ''};
  height: ${(props) => props.height ? `${props.theme.px(props.height)} !important;` : ''};
  max-height: ${(props) => props.maxHeight ? `${props.theme.px(props.maxHeight)} !important;` : ''};
`;

Spacer.propTypes = {
  margin: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  padding: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Spacer;
