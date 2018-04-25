import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = styled.View`
  border-top-width: ${(props) => props.vertical ? 0 : 1};
  border-right-width: ${(props) => props.vertical ? 1 : 0};
  border-color: ${(props) => props.theme.color[props.color] || ''};
  margin: 0;
`;

Divider.propTypes = {
  color: PropTypes.string,
  vertical: PropTypes.bool,
};

Divider.defaultProps = {
  color: 'greyLighter',
  vertical: false,
};

export default Divider;
