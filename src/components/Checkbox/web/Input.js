import styled from 'styled-components';
import Box from './Box';
import Tick from './Tick';

const styles = {
  focus: {
    Box: {
      boxShadow(props) {
        if (props.disabled) {
          return `0 0 0 1px ${props.theme.color.grey}`;
        } else if (props.error) {
          return `0 0 0 1px ${props.theme.color.red}`;
        }
        return `0 0 0 1px ${props.theme.color.primary}`;
      },
    },
  },
  checked: {
    Box: {
      background(props) {
        if (props.disabled) {
          return props.theme.color.grey;
        } else if (props.error) {
          return props.theme.color.red;
        }
        return props.theme.color.primary;
      },
    },
  },
  Box: {
    border(props) {
      if (props.disabled) {
        return `1px solid ${props.theme.color.grey}`;
      } else if (props.error) {
        return `1px solid ${props.theme.color.greyDark}`;
      }
      return `1px solid ${props.theme.color.greyDark}`;
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
  /* For browsers that yet don't support clip-path */
  clip: rect(0, 0, 0, 0);
  clip-path: inset(1px 0 0 0);
  border: 0;
  visibility: visible;
  white-space: nowrap;

  + ${/* sc-selector */Box} {
    border: ${styles.Box.border};
  }

  &:focus {
    + ${/* sc-selector */Box} {
      box-shadow: ${styles.focus.Box.boxShadow};
    }
  }

  &:checked {
    + ${/* sc-selector */Box} {
      background: ${styles.checked.Box.background};

      ${/* sc-selector */Tick} {
        display: block;
      }
    }
  }
`;

export default Input;
