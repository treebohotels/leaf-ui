import styled from 'styled-components';

const Dialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${(props) => props.theme.boxShadow[3]};
  min-width: ${(props) => props.theme.px(75)};
`;

export default Dialog;
