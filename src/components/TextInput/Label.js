import styled from 'styled-components';

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  color: ${(props) => props.theme.color.greyDark};
  font-size: ${(props) => props.theme.fontSize.xxs};
  transform: translate(0, 0);
  transition: all 0.15s ease-in-out;
`;

export default Label;
