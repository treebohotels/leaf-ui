import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';

const Spacer = styled(({ margin, padding, ...rest }) => <View {...rest} />)`
  ${(props) => props.margin || props.margin === 0 ? `margin: ${props.theme.px(props.margin)}` : ''};
  ${(props) => props.padding || props.padding === 0 ? `padding: ${props.theme.px(props.padding)}` : ''};
  ${(props) => props.maxWidth ? `max-width: ${props.maxWidth}` : ''};
  ${(props) => props.width ? `width: ${props.width}` : ''};
  ${(props) => props.minWidth ? `min-width: ${props.minWidth}` : ''};
  ${(props) => props.minHeight ? `min-height: ${props.minHeight}` : ''};
  ${(props) => props.height ? `height: ${props.height}` : ''};
  ${(props) => props.maxHeight ? `max-height: ${props.maxHeight}` : ''};
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
