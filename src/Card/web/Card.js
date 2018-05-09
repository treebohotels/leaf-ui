import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const Card = styled(
  ({
    color,
    elevated,
    ...props
  }) => <div {...props} />,
)`
  background: ${(props) => props.theme.color[props.color]};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.elevated ? '0 6px 16px 0 rgba(0, 0, 0, 0.16)' : ''};
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
