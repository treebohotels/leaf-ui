import List from '../List';

const Option = List.Item.extend`
  background: ${(props) => props.isActive || props.isSelected ? props.theme.color.primaryLighter : ''};

  &:hover,
  &:focus {
    background: ${(props) => props.isActive || props.isSelected ? props.theme.color.primaryLighter : ''};
  }
`;

export default Option;
