import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spacer = styled(
  ({
    margin,
    padding,
    height,
    width,
    ...rest
  }) => <View {...rest} />,
)`
  ${(props) => props.margin || props.margin === 0 ? `margin: ${props.theme.px(props.margin)}` : ''};
  ${(props) => props.padding || props.padding === 0 ? `padding: ${props.theme.px(props.padding)}` : ''};
  ${(props) => props.maxWidth ? `max-width: ${props.theme.px(props.maxWidth)}` : ''};
  ${(props) => props.width ? `width: ${props.theme.px(props.width)}` : ''};
  ${(props) => props.minWidth ? `min-width: ${props.theme.px(props.minWidth)}` : ''};
  ${(props) => props.minHeight ? `min-height: ${props.theme.px(props.minHeight)}` : ''};
  ${(props) => props.height ? `height: ${props.theme.px(props.height)}` : ''};
  ${(props) => props.maxHeight ? `max-height: ${props.theme.px(props.maxHeight)}` : ''};
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
