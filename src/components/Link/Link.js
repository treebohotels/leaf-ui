import styled from 'styled-components';

const Link = styled.a`
  color: ${(p) => p.theme.color.royal};

  &:hover {
    color: ${(p) => p.theme.color.royalDark};
  }
`;

export default Link;
