import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  flex: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${(props) => props.theme.px([2, 3])};
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.lagoon};
  border-bottom: 2px solid transparent;
  border-color: ${(props) => props.isSelected ? props.theme.color.yellow : 'transparent'};
`;

export default Title;
