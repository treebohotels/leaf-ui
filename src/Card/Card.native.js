import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import View from '../View';
import theme from '../theme';

const styles = {
  borderWidth(props) {
    if (props.borderStyle === 'none') {
      return '0px';
    }
    return '1px';
  },
  borderStyle(props) {
    if (props.borderStyle === 'none') {
      return 'solid';
    }
    return props.borderStyle;
  },
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
    borderColor,
    backgroundColor,
    elevated,
    ...props
  }) => (
    <View {...props} />
  ),
)`
  border-width: ${styles.borderWidth};
  border-style: ${styles.borderStyle};
  border-radius: ${styles.borderRadius};
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
  borderStyle: PropTypes.oneOf(['solid', 'dotted', 'dashed', 'none']),
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
