import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Spacer = styled(({
  children,
  ...props
}) => React.cloneElement(children, props))`
  ${(p) => p.margin || p.margin === 0 ? `margin: ${p.theme.px(p.margin)}` : ''}
  ${(p) => p.padding || p.padding === 0 ? `padding: ${p.theme.px(p.padding)}` : ''}
  ${(p) => p.maxWidth ? `max-width: ${p.maxWidth}` : ''}
  ${(p) => p.width ? `width: ${p.width}` : ''}
  ${(p) => p.minWidth ? `min-width: ${p.minWidth}` : ''}
  ${(p) => p.minHeight ? `min-height: ${p.minHeight}` : ''}
  ${(p) => p.height ? `height: ${p.height}` : ''}
  ${(p) => p.maxHeight ? `max-height: ${p.maxHeight}` : ''}
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
