import styled from 'styled-components';

const Box = styled.span`
  display: flex;
  width: ${(props) => props.theme.px(2)};
  height: ${(props) => props.theme.px(2)};
  margin-right: ${(props) => props.theme.px(1)};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default Box;
