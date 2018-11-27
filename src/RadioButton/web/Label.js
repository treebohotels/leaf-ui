import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  color: ${(props) => props.theme.color.greyDark};
`;

export default Label;
