import List from '../List';

const Option = List.Item.extend`
  background: ${(props) => props.isActive || props.isSelected ? props.theme.color.translucent : ''};

  &:hover,
  &:focus {
    background: ${(props) => props.isActive || props.isSelected ? props.theme.color.translucent : ''};
  }
`;

export default Option;
