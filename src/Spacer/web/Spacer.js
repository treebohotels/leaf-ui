import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spacer = styled(
  ({
    margin,
    padding,
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
    children,
    ...props
  }) => React.cloneElement(children, props),
)`
  margin: ${(props) => props.margin ? `${props.theme.px(props.margin)} !important;` : ''};
  padding: ${(props) => props.padding ? `${props.theme.px(props.padding)} !important;` : ''};
  min-width: ${(props) => props.minWidth != null ? `${props.theme.px(props.minWidth)} !important;` : ''};
  width: ${(props) => props.width != null ? `${props.theme.px(props.width)} !important;` : ''};
  max-width: ${(props) => props.maxWidth != null ? `${props.theme.px(props.maxWidth)} !important;` : ''};
  min-height: ${(props) => props.minHeight != null ? `${props.theme.px(props.minHeight)} !important;` : ''};
  height: ${(props) => props.height != null ? `${props.theme.px(props.height)} !important;` : ''};
  max-height: ${(props) => props.maxHeight != null ? `${props.theme.px(props.maxHeight)} !important;` : ''};
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
  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Spacer;
