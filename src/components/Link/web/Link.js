import styled from 'styled-components';

const Link = styled.a`
  color: ${(props) => props.theme.color.blue};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.blueDark};
  }
`;

export default Link;
