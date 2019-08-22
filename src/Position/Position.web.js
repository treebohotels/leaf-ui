import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Position = styled(
  ({
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
    transform,
    children,
    ...props
  }) => React.cloneElement(children, props),
)`
  &&& {
    position: ${(props) => props.position ? props.position : ''};
    top: ${(props) => props.top != null ? props.theme.px(props.top) : ''};
    right: ${(props) => props.right != null ? props.theme.px(props.right) : ''};
    bottom: ${(props) => props.bottom != null ? props.theme.px(props.bottom) : ''};
    left: ${(props) => props.left != null ? props.theme.px(props.left) : ''};
    z-index: ${(props) => props.zIndex != null ? props.zIndex : ''};
    transform: ${(props) => props.transform || ''};
  }
`;

Position.propTypes = {
  position: PropTypes.oneOf([
    'static',
    'relative',
    'absolute',
    'fixed',
    'sticky',
  ]),
  top: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  right: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  bottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  left: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  transform: PropTypes.string,
};

export default Position;
