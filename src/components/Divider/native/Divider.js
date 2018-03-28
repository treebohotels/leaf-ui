import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = styled.View`
  ${(props) => props.thickness ? `border-top-width: ${props.vertical ? 0 : props.thickness};` : ''};
  ${(props) => props.thickness ? `border-right-width: ${props.vertical ? props.thickness : 0};` : ''};
  ${(props) => props.thickness ? `border-color: ${props.theme.color[props.color]};` : ''};
  ${(props) => props.thickness ? `border-style: ${props.type};` : ''};
  ${(props) => props.thickness ? `border-right-width: ${props.vertical ? props.thickness : 0};` : ''};
  ${'margin: 0;'};
`;

Divider.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.oneOf(['solid', 'dashed']),
  vertical: PropTypes.bool,
};

Divider.defaultProps = {
  thickness: 1,
  color: 'greyLighter',
  type: 'solid',
  vertical: false,
};

export default Divider;
