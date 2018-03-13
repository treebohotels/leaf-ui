import styled from 'styled-components';
import Label from './Label';

const styles = {
  focus: {
    border(props) {
      if (props.disabled) {
        return `1px solid ${props.theme.color.grey}`;
      } else if (props.error) {
        return `1px solid ${props.theme.color.greyDark}`;
      }
      return `1px solid ${props.theme.color.greyDark}`;
    },
    Label: {
      color(props) {
        if (props.disabled) {
          return props.theme.color.grey;
        } else if (props.error) {
          return props.theme.color.red;
        }
        return props.theme.color.primary;
      },
    },
  },
};

const Input = styled.input`
  background: transparent;
  border: 1px solid ${(props) => props.theme.color.greyDark};
  padding: ${(props) => props.theme.px([1, 0])};
  ${(p) => p.block ? 'width: 100%;' : ''}

  &:focus {
    border: ${styles.focus.border};

    + ${/* sc-selector */Label} {
      color: ${styles.focus.Label.color};
    }
  }

  &::placeholder {
    visibility: hidden;
  }

  &:placeholder-shown {
    + ${/* sc-selector */Label} {
      color: ${(props) => props.theme.color.grey};
      transform: translate(0, ${(props) => props.theme.px(3)});
    }
  }
`;

export default Input;
