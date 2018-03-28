import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = styled.View`
  borderTopWidth: ${(p) => p.vertical ? 0 : p.thickness};
  borderRightWidth: ${(p) => p.vertical ? p.thickness : 0};
  borderColor: ${(p) => p.theme.color[p.color]};
  borderStyle: ${(p) => p.type};
  margin: 0;
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
