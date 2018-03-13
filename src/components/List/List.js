import styled from 'styled-components';
import ListItem from './ListItem';

const List = styled.ul`
  padding: ${(props) => props.theme.px([1, 0])};
`;

List.Item = ListItem;

export default List;
