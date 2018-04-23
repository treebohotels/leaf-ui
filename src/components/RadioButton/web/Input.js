import styled from 'styled-components';
import Circle from './Circle';

const styles = {
  focus: {
    Circle: {
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
    Circle: {
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
  Circle: {
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
  type: 'radio',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  visibility: visible;
  white-space: nowrap;

  + ${/* sc-selector */Circle} {
    border: ${styles.Circle.border};
  }

  &:focus {
    + ${/* sc-selector */Circle} {
      box-shadow: ${styles.focus.Circle.boxShadow};
    }
  }

  &:checked {
    + ${/* sc-selector */Circle} {
      &::before {
        content: '';
        width: ${(props) => props.theme.px(1)};
        height: ${(props) => props.theme.px(1)};
        border-radius: 50%;
        background: ${styles.checked.Circle.background};
      }
    }
  }
`;

export default Input;
