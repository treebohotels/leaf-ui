import styled from 'styled-components';

const TR = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.color.greyLight};
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  opacity: ${(props) => props.disabled ? '0.5' : ''};

  &:hover {
    background-color: ${(props) => props.theme.color.translucent};
    cursor: ${(props) => props.onClick ? 'pointer' : ''};
  }
`;

export default TR;
