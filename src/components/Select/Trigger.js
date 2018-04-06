import Flex from '../Flex';

const styles = {
  borderColor(props) {
    if (props.isOpen) {
      return props.theme.color.primary;
    } else if (props.disabled) {
      return props.theme.color.greyLight;
    } else if (props.error) {
      return props.theme.color.red;
    }
    return props.theme.color.greyLight;
  },
  backgroundColor(props) {
    if (props.isOpen) {
      return props.theme.color.white;
    } else if (props.disabled) {
      return props.theme.color.greyLighter;
    } else if (props.error) {
      return props.theme.color.redLighter;
    }
    return props.theme.color.white;
  },
};

const Trigger = Flex.extend`
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${styles.backgroundColor};
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  width: ${(props) => props.block ? '100%' : props.theme.px(25)};
  padding: ${(props) => props.theme.px([3, 1.5, 1.5, 1.5])};
  border: 1px solid ${styles.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default Trigger;
