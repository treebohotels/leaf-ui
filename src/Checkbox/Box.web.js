import styled from 'styled-components';

const Box = styled.span`
  flex: none;
  width: ${(props) => props.theme.px(2)};
  height: ${(props) => props.theme.px(2)};
  margin-right: ${(props) => props.theme.px(1)};
  border-width: 1px;
  border-style: solid;
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default Box;
