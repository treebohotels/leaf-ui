import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = styled(
  ({
    alignContent,
    alignItems,
    alignSelf,
    display,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    order,
    children,
    ...props
  }) => React.cloneElement(children, props),
)`
  &&& {
    align-content: ${(props) => props.alignContent ? props.alignContent : ''};
    align-self: ${(props) => props.alignSelf ? props.alignSelf : ''};
    align-items: ${(props) => props.alignItems ? props.alignItems : ''};
    display: ${(props) => props.display ? props.display : ''};
    flex: ${(props) => props.flex ? props.flex : ''};
    flex-basis: ${(props) => props.flexBasis ? props.flexBasis : ''};
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : ''};
    flex-grow: ${(props) => props.flexGrow ? props.flexGrow : ''};
    flex-shrink: ${(props) => props.flexShrink ? props.flexShrink : ''};
    flex-wrap: ${(props) => props.flexWrap ? props.flexWrap : ''};
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : ''};
    order: ${(props) => props.order ? props.order : ''};
  }
`;

Flex.propTypes = {
  alignContent: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  justifyContent: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  order: PropTypes.number,
};

Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
};

export default Flex;
