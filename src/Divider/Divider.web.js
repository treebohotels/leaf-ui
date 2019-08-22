import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const Divider = styled(
  ({
    color,
    type,
    ...props
  }) => <hr {...props} />,
)`
  border-width: 1px 0 0;
  border-color: ${(props) => props.theme.color[props.color]};
  border-style: ${(props) => props.type};
  background: ${(props) => props.theme.color.transparent};
  margin: 0;
`;

Divider.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
  type: PropTypes.oneOf(['solid', 'dashed']),
};

Divider.defaultProps = {
  color: 'greyLighter',
  type: 'solid',
};

export default Divider;
