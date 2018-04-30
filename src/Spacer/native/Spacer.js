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
  ${(props) => props.margin ? `margin: ${props.theme.px(props.margin)}` : ''};
  ${(props) => props.padding ? `padding: ${props.theme.px(props.padding)}` : ''};
  ${(props) => props.minWidth != null ? `min-width: ${props.theme.px(props.minWidth)}` : ''};
  ${(props) => props.width != null ? `width: ${props.theme.px(props.width)}` : ''};
  ${(props) => props.maxWidth != null ? `max-width: ${props.theme.px(props.maxWidth)}` : ''};
  ${(props) => props.minHeight != null ? `min-height: ${props.theme.px(props.minHeight)}` : ''};
  ${(props) => props.height != null ? `height: ${props.theme.px(props.height)}` : ''};
  ${(props) => props.maxHeight != null ? `max-height: ${props.theme.px(props.maxHeight)}` : ''};
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
