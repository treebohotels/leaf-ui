import styled from 'styled-components';

const Link = styled.a`
  color: ${(p) => p.theme.color.blue};

  &:hover {
    color: ${(p) => p.theme.color.blueDark};
  }
`;

export default Link;
