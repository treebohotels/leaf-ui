import styled from 'styled-components';
import Trigger from './Trigger';
import Label from './Label';

const styles = {
  focus: {
    borderColor(props) {
      return props.theme.color.primary;
    },
    backgroundColor(props) {
      return props.theme.color.white;
    },
    color(props) {
      return props.theme.color.primary;
    },
  },
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

const Input = styled.button`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(1px 0 0 0);
  padding: 0;
  overflow: hidden;

  + ${/* sc-selector */Trigger} {
      background-color: ${styles.backgroundColor};
      border: 1px solid ${styles.borderColor};
  }

  &:focus {
     + ${/* sc-selector */Trigger} {
        border: 1px solid ${styles.focus.borderColor};
        background-color: ${styles.focus.backgroundColor};
     }

     + ${/* sc-selector */Trigger} ${/* sc-selector */Label} {
        color: ${styles.focus.color};
     }
  }
`;

export default Input;
