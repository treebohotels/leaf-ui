import styled from 'styled-components';

const Label = styled.label`
  display: block;
  color: ${(props) => props.theme.color.grey};
  font-size: ${(props) => props.theme.fontSize.s};
  margin-bottom: ${(props) => props.theme.px(1)};
`;

export default Label;
