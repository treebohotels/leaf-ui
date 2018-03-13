import styled from 'styled-components';

const Circle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${(props) => props.theme.px(2)};
  height: ${(props) => props.theme.px(2)};
  margin-right: ${(props) => props.theme.px(1)};
`;

export default Circle;
