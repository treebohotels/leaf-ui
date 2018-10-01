import styled from 'styled-components';
import Box from './Box';
import Tick from './Tick';

const styles = {
  checked: {
    Box: {
      borderColor(props) {
        if (props.disabled) {
          return props.theme.color.greyLight;
        }
        if (props.error) {
          return props.theme.color.red;
        }
        return props.theme.color.primary;
      },
      backgroundColor(props) {
        if (props.disabled) {
          return props.theme.color.greyLight;
        }
        if (props.error) {
          return props.theme.color.red;
        }
        return props.theme.color.primary;
      },
    },
  },
  Box: {
    borderColor(props) {
      if (props.disabled) {
        return props.theme.color.greyLight;
      }
      if (props.error) {
        return props.theme.color.red;
      }
      return props.theme.color.greyLight;
    },
    backgroundColor(props) {
      if (props.disabled) {
        return props.theme.color.greyLighter;
      }
      if (props.error) {
        return props.theme.color.redLighter;
      }
      return props.theme.color.white;
    },
  },
};

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(1px 0 0 0);
  border: 0;
  visibility: visible;
  white-space: nowrap;

  + ${/* sc-selector */Box} {
    border-color: ${styles.Box.borderColor};
    background-color: ${styles.Box.backgroundColor};
  }

  &:focus {
    + ${/* sc-selector */Box} {
      border-color: ${(props) => props.theme.color.primary};
      background-color: ${(props) => props.theme.color.white};
    }
  }

  &:checked {
    + ${/* sc-selector */Box} {
      border-color: ${styles.checked.Box.borderColor};
      background-color: ${styles.checked.Box.backgroundColor};

      ${/* sc-selector */Tick} {
        display: block;
      }
    }
  }
`;

export default Input;
