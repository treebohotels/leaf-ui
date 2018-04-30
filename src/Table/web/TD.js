import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const TD = styled.td`
  padding: ${(props) => props.theme.px([2, 2.5])};
  color: ${(props) => props.color ? props.theme.color[props.color] : ''};
`;

TD.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
};

TD.defaultProps = {
  color: 'greyDark',
};

export default TD;
