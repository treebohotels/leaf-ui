import styled from 'styled-components';

const styles = {
  borderColor(props) {
    if (props.isOpen) {
      return props.theme.color.primary;
    }
    if (props.disabled) {
      return props.theme.color.greyLight;
    }
    if (props.error) {
      return props.theme.color.red;
    }
    return props.theme.color.greyLight;
  },
  backgroundColor(props) {
    if (props.isOpen) {
      return props.theme.color.white;
    }
    if (props.disabled) {
      return props.theme.color.greyLighter;
    }
    if (props.error) {
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
  width: 100%;
  padding: 0;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.white};
  }
`;

export default Trigger;
