import styled from 'styled-components';
import PropTypes from 'prop-types';

const TH = styled.th`
  padding: ${(props) => props.theme.px(2)};
  text-align: ${(props) => props.textAlign ? props.textAlign : ''};
 `;

TH.propTypes = {
  textAlign: PropTypes.string,
};

TH.defaultProps = {
  textAlign: 'left',
};

export default TH;
