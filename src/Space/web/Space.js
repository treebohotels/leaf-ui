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
  &&& {
    margin: ${(props) => props.margin ? `${props.theme.px(props.margin)}` : ''};
    padding: ${(props) => props.padding ? `${props.theme.px(props.padding)}` : ''};
  }
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
