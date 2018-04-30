import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const TH = styled.th`
  padding: ${(props) => props.theme.px([2, 2.5])};
  text-align: left;
`;

TH.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
};

TH.defaultProps = {
  color: 'greyDarker',
};

export default TH;
