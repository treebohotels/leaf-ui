import styled from 'styled-components';

const Label = styled.label`
  position: absolute;
  top: ${(props) => props.theme.px(3)};
  left: ${(props) => props.theme.px(1.5)};
  color: ${(props) => props.theme.color.grey};
  font-size: ${(props) => props.theme.fontSize.xxs};
  pointer-events: none;
  transform: translate(0, 0);
  transition: all 0.15s ease-in-out;
`;

export default Label;
