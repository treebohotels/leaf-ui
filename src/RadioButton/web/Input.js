import styled from 'styled-components';
import Circle from './Circle';

const styles = {
  focus: {
    Circle: {
      borderColor(props) {
        if (props.disabled) {
          return `0 0 0 1px ${props.theme.color.grey}`;
        }
        if (props.error) {
          return `0 0 0 1px ${props.theme.color.red}`;
        }
        return `0 0 0 1px ${props.theme.color.primary}`;
      },
    },
  },
  checked: {
    Circle: {
      backgroundColor(props) {
        if (props.disabled) {
          return props.theme.color.grey;
        }
        if (props.error) {
          return props.theme.color.red;
        }
        return props.theme.color.primary;
      },
    },
  },
  Circle: {
    borderColor(props) {
      if (props.disabled) {
        return props.theme.color.greyLight;
      }
      if (props.error) {
        return props.theme.color.red;
      }
      return props.theme.color.greyLight;
    },
  },
};

const Input = styled.input.attrs({
  type: 'radio',
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

  + ${/* sc-selector */Circle} {
    border-color: ${styles.Circle.borderColor};
  }

  &:focus {
    + ${/* sc-selector */Circle} {
      border-color: ${(props) => props.theme.color.primary};
    }
  }

  &:checked {
    + ${/* sc-selector */Circle} {
      border-color: ${(props) => props.theme.color.primary};

      &::before {
        content: '';
        width: ${(props) => props.theme.px(1)};
        height: ${(props) => props.theme.px(1)};
        border-radius: 50%;
        background-color: ${styles.checked.Circle.backgroundColor};
      }
    }
  }
`;

export default Input;
