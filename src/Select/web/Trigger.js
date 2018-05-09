import styled from 'styled-components';

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

const Trigger = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${styles.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${styles.backgroundColor};
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  width: ${(props) => props.block ? '100%' : props.theme.px(25)};
  padding: 0;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.white};
  }
`;

export default Trigger;
