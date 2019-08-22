import styled from 'styled-components';
import Icon from '../Icon';

const CloseIcon = styled(Icon).attrs({
  color: 'white',
  name: 'close',
})`
  position: absolute;
  top: 0;
  right: ${(props) => props.theme.px(-4)};
`;

export default CloseIcon;
