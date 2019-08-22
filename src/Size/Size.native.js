import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Size = styled(
  ({
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
  ${(props) => props.minWidth != null ? `min-width: ${props.theme.px(props.minWidth)}` : ''};
  ${(props) => props.width != null ? `width: ${props.theme.px(props.width)}` : ''};
  ${(props) => props.maxWidth != null ? `max-width: ${props.theme.px(props.maxWidth)}` : ''};
  ${(props) => props.minHeight != null ? `min-height: ${props.theme.px(props.minHeight)}` : ''};
  ${(props) => props.height != null ? `height: ${props.theme.px(props.height)}` : ''};
  ${(props) => props.maxHeight != null ? `max-height: ${props.theme.px(props.maxHeight)}` : ''};
`;

Size.propTypes = {
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

export default Size;
