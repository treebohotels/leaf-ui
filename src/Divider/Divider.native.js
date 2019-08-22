import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const Divider = styled(
  ({
    color,
    vertical,
    ...props
  }) => <View {...props} />,
)`
  border-top-width: ${(props) => props.vertical ? 0 : 1};
  border-right-width: ${(props) => props.vertical ? 1 : 0};
  border-color: ${(props) => props.theme.color[props.color] || ''};
  margin: 0;
`;

Divider.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
  vertical: PropTypes.bool,
};

Divider.defaultProps = {
  color: 'greyLighter',
  vertical: false,
};

export default Divider;
