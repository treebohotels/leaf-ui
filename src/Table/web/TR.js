import styled from 'styled-components';

const TR = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.color.greyLight};

  &:hover {
    background-color: ${(props) => props.theme.color.translucent};
  }
`;

export default TR;
