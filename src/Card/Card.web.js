import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import View from '../View';
import theme from '../theme';

const styles = {
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    return '';
  },
};

const Card = styled(
  ({
    borderStyle,
    borderColor,
    backgroundColor,
    shape,
    elevated,
    ...props
  }) => <View {...props} />,
)`
  border-width: 1px;
  border-style: ${(props) => props.borderStyle};
  border-radius: ${styles.borderRadius};
  border-color: ${(props) => props.borderColor ? props.theme.color[props.borderColor] : props.theme.color[props.backgroundColor]};
  background-color: ${(props) => props.theme.color[props.backgroundColor]};
  box-shadow: ${(props) => props.elevated ? '0 6px 16px 0 rgba(0, 0, 0, 0.16)' : ''};
`;

Card.propTypes = {
  borderStyle: PropTypes.string,
  borderColor: PropTypes.oneOf(Object.keys(theme.color)),
  backgroundColor: PropTypes.oneOf(Object.keys(theme.color)),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged']),
  elevated: PropTypes.bool,
};

Card.defaultProps = {
  borderStyle: 'solid',
  backgroundColor: 'white',
  shape: 'bluntEdged',
};

export default Card;
