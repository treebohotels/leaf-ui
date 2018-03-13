import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = styled.hr`
  border-width: 1px 0 0;
  border-color: ${(props) => props.theme.color[props.color]};
  border-style: ${(props) => props.type};
  background: transparent;
  margin: 0;
`;

Divider.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['solid', 'dashed']),
};

Divider.defaultProps = {
  color: 'grey',
  type: 'solid',
};

export default Divider;
