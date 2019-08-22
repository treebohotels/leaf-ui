import styled from 'styled-components';

const Circle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.white};
  width: ${(props) => props.theme.px(2)};
  height: ${(props) => props.theme.px(2)};
  margin-right: ${(props) => props.theme.px(1)};
`;

export default Circle;
