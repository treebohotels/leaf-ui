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
  &&& {
    min-width: ${(props) => props.minWidth != null ? `${props.theme.px(props.minWidth)}` : ''};
    width: ${(props) => props.width != null ? `${props.theme.px(props.width)}` : ''};
    max-width: ${(props) => props.maxWidth != null ? `${props.theme.px(props.maxWidth)}` : ''};
    min-height: ${(props) => props.minHeight != null ? `${props.theme.px(props.minHeight)}` : ''};
    height: ${(props) => props.height != null ? `${props.theme.px(props.height)}` : ''};
    max-height: ${(props) => props.maxHeight != null ? `${props.theme.px(props.maxHeight)}` : ''};
  }
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
