import styled from 'styled-components';

const ImgPlaceholder = styled.div.attrs({
  placeholder: '',
})`
  background-color: ${(props) => props.theme.color.translucent};
`;

export default ImgPlaceholder;
