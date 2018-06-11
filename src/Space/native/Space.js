import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Space = styled(
  ({
    margin,
    padding,
    children,
    ...props
  }) => React.cloneElement(children, props),
)`
  ${(props) => props.margin ? `margin: ${props.theme.px(props.margin)}` : ''};
  ${(props) => props.padding ? `padding: ${props.theme.px(props.padding)}` : ''};
`;

Space.propTypes = {
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
};

export default Space;
