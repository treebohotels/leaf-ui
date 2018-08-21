import List from '../../List/web';

const styles = {
  backgroundColor: (props) => {
    if (props.isActive) {
      return props.theme.color.translucent;
    } else if (props.isSelected) {
      return props.theme.color.primaryLighter;
    }
    return '';
  },
};

const Option = List.Item.extend`
  background-color: ${styles.backgroundColor};
  padding: ${(props) => props.theme.px(2)};
`;

export default Option;
