import styled from 'styled-components';
import PropTypes from 'prop-types';

const TD = styled.td`
  padding: ${(props) => props.theme.px(2)};
  color: ${(props) => props.theme.color.greyDark};
  text-align: ${(props) => props.textAlign ? props.textAlign : ''};
`;

TD.propTypes = {
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
};

TD.defaultProps = {
  textAlign: 'left',
};

export default TD;
