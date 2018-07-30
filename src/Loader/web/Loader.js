import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Loader = styled.div`
  display: inline-block;
  animation: ${spin} 1s linear infinite;
  width: ${(props) => props.theme.px(5)};
  height: ${(props) => props.theme.px(5)};
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.color.white};
  border-right-color: ${(props) => props.theme.color.green};
  display: inline-block;
`;

export default Loader;
