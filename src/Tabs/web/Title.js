import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  flex: 0;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${(props) => props.theme.px(2)};
  border-bottom: 2px solid ${(props) => props.theme.color.transparent};
  color: ${(props) => props.isSelected ? '' : props.theme.color.grey};
  font-weight: ${(props) => props.isSelected ? props.theme.fontWeight.medium : ''};
  border-color: ${(props) => props.isSelected ? props.theme.color.primary : props.theme.color.transparent};
`;

export default Title;
