import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const Card = styled(
  ({
    color,
    elevated,
    ...props
  }) => <View {...props} />,
)`
  background: ${(props) => props.theme.color[props.color]};
  border-radius: ${(props) => props.theme.borderRadius};
  elevation: ${(props) => props.elevated ? 1 : 0};
  shadow-offset: ${(props) => props.elevated ? '0px 6px' : '0px 0px'};
  shadow-radius: ${(props) => props.elevated ? '16px' : '0px'};
  shadow-color: rgba(0, 0, 0);
  shadow-opacity: ${(props) => props.elevated ? '0.16' : '0'};
`;

Card.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
  elevated: PropTypes.bool,
};

Card.defaultProps = {
  color: 'white',
  elevated: false,
};

export default Card;
