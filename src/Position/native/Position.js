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
  ${(props) => props.position ? `position: ${props.position};` : ''};
  ${(props) => props.top != null ? `top: ${props.theme.px(props.top)};` : ''};
  ${(props) => props.right != null ? `right: ${props.theme.px(props.right)};` : ''};
  ${(props) => props.bottom != null ? `bottom: ${props.theme.px(props.bottom)};` : ''};
  ${(props) => props.left != null ? `left: ${props.theme.px(props.left)};` : ''};
  ${(props) => props.zIndex != null ? `z-index: ${props.zIndex};` : ''};
`;

Position.propTypes = {
  position: PropTypes.oneOf([
    'relative',
    'absolute',
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
