import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const styles = {
  elevation: (props) => [0, 4, 12, 16, 32, 40][props.elevation],
  boxShadow: (props) => [
    '0px 0px 0px rgba(0,0,0,0)',
    '0px 1px 3px rgba(0,0,0,0.1)',
    '0px 3px 6px rgba(0,0,0,0.2)',
    '0px 10px 20px rgba(0,0,0,0.3)',
    '0px 14px 28px rgba(0,0,0,0.4)',
    '0px 19px 38px rgba(0,0,0,0.5)',
  ][props.elevation],
};

const Card = styled(
  ({
    color,
    elevation,
    ...props
  }) => <View {...props} />,
)`
  background: ${(props) => props.theme.color[props.color]};
  border-radius: ${(props) => props.theme.borderRadius};
  elevation: ${styles.elevation};
  box-shadow: ${styles.boxShadow};
`;

Card.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
  elevation: PropTypes.number,
};

Card.defaultProps = {
  color: 'white',
  elevation: 0,
};

export default Card;
