import styled from 'styled-components';

const styles = {
  color(props) {
    if (props.isOpen) {
      return props.theme.color.primary;
    } else if (props.disabled) {
      return props.theme.color.grey;
    } else if (props.error) {
      return props.theme.color.red;
    }
    return props.theme.color.grey;
  },
};

const Label = styled.div`
  position: absolute;
  top: ${(props) => props.hasValue ? props.theme.px(1) : props.theme.px(2.5)};
  left: ${(props) => props.theme.px(1.5)};
  color: ${styles.color};
  font-size: ${(props) => props.hasValue ? props.theme.fontSize.xxs : props.theme.fontSize.s};
  pointer-events: none;
  transform: translate(0, 0);
  transition: all 0.15s ease-in-out;
`;

export default Label;
