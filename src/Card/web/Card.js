import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import View from '../../View/web';
import theme from '../../theme';

const Card = styled(
  ({
    borderColor,
    backgroundColor,
    elevated,
    ...props
  }) => <View {...props} />,
)`
  border-width: 1px;
  border-style: solid;
  border-radius: ${(props) => props.theme.borderRadius};
  border-color: ${(props) => props.borderColor ? props.theme.color[props.borderColor] : props.theme.color[props.backgroundColor]};
  background-color: ${(props) => props.theme.color[props.backgroundColor]};
  box-shadow: ${(props) => props.elevated ? '0 6px 16px 0 rgba(0, 0, 0, 0.16)' : ''};
`;

Card.propTypes = {
  borderColor: PropTypes.oneOf(Object.keys(theme.color)),
  backgroundColor: PropTypes.oneOf(Object.keys(theme.color)),
  elevated: PropTypes.bool,
};

Card.defaultProps = {
  backgroundColor: 'white',
};

export default Card;
