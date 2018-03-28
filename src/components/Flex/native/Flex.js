import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = styled.View`
  ${(props) => props.color ? `color: ${props.theme.color[props.color]};` : ''}
  ${(props) => props.alignContent ? `align-content: ${props.alignContent};` : ''};
  ${(props) => props.alignSelf ? `align-self: ${props.alignSelf};` : ''};
  ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''};
  ${(props) => props.display ? `display: ${props.display};` : ''};
  ${(props) => props.flex ? `flex: ${props.flex};` : ''};
  ${(props) => props.flexBasis ? `flex-basis: ${props.flexBasis};` : ''};
  ${(props) => props.flexDirection ? `flex-direction: ${props.flexDirection};` : ''};
  ${(props) => props.flexGrow ? `flex-grow: ${props.flexGrow};` : ''};
  ${(props) => props.flexShrink ? `flex-shrink: ${props.flexShrink};` : ''};
  ${(props) => props.flexWrap ? `flex-wrap: ${props.flexWrap};` : ''};
  ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''};
  ${(props) => props.order ? `order: ${props.order};` : ''};
`;

Flex.propTypes = {
  alignContent: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  children: PropTypes.node,
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  flex: PropTypes.number,
  flexBasis: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  justifyContent: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  order: PropTypes.number,
};

export default Flex;
