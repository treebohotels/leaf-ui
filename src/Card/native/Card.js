import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import View from '../../View/native';
import Text from '../../Text/native';
import theme from '../../theme';

const Card = styled(
  ({
    borderColor,
    backgroundColor,
    elevated,
    children,
    ...props
  }) => (
    <View {...props}>
      <Text>{children}</Text>
    </View>
  ),
)`
  border-width: 1px;
  border-style: solid;
  border-radius: ${(props) => props.theme.borderRadius};
  border-color: ${(props) => props.borderColor ? props.theme.color[props.borderColor] : props.theme.color[props.backgroundColor]};
  background-color: ${(props) => props.theme.color[props.backgroundColor]};
  elevation: ${(props) => props.elevated ? 1 : 0};
  /* stylelint-disable property-no-unknown */
  shadow-offset: 0 1px;
  shadow-opacity: ${(props) => props.elevated ? 0.16 : 0};
  shadow-radius: ${(props) => props.elevated ? 1 : 0};
  shadow-color: #000;
  /* stylelint-enable property-no-unknown */
`;

Card.propTypes = {
  borderColor: PropTypes.oneOf(Object.keys(theme.color)),
  backgroundColor: PropTypes.oneOf(Object.keys(theme.color)),
  elevated: PropTypes.bool,
  children: PropTypes.string,
};

Card.defaultProps = {
  backgroundColor: 'white',
};

export default Card;
