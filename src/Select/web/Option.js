import List from '../../List/web';

const Option = List.Item.extend`
  background-color: ${(props) => props.isActive ? props.theme.color.translucent : ''};
`;

export default Option;
