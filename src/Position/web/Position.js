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
    children,
    ...props
  }) => React.cloneElement(children, props),
)`
  &&& {
    position: ${(props) => props.position ? `${props.position} !important;` : ''};
    top: ${(props) => props.top != null ? `${props.theme.px(props.top)} !important;` : ''};
    right: ${(props) => props.right != null ? `${props.theme.px(props.right)} !important;` : ''};
    bottom: ${(props) => props.bottom != null ? `${props.theme.px(props.bottom)} !important;` : ''};
    left: ${(props) => props.left != null ? `${props.theme.px(props.left)} !important;` : ''};
    z-index: ${(props) => props.zIndex != null ? `${props.zIndex} !important;` : ''};
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
};

export default Position;
