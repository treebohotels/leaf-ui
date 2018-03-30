import styled from 'styled-components';
import Label from './Label';

const styles = {
  borderColor(props) {
    if (props.disabled) {
      return props.theme.color.grey;
    } else if (props.error) {
      return props.theme.color.red;
    }
    return props.theme.color.greyLight;
  },
  backgroundColor(props) {
    if (props.disabled) {
      return props.theme.color.grey;
    } else if (props.error) {
      return props.theme.color.redLighter;
    }
    return 'transparent';
  },
  placeholderShown: {
    borderColor(props) {
      if (props.disabled) {
        return props.theme.color.grey;
      } else if (props.error) {
        return props.theme.color.red;
      }
      return props.theme.color.greyLight;
    },
    backgroundColor(props) {
      if (props.disabled) {
        return props.theme.color.grey;
      } else if (props.error) {
        return props.theme.color.redLighter;
      }
      return 'transparent';
    },
  },
  focus: {
    borderColor(props) {
      if (props.disabled) {
        return props.theme.color.grey;
      } else if (props.error) {
        return props.theme.color.primary;
      }
      return props.theme.color.primary;
    },
    backgroundColor(props) {
      if (props.disabled) {
        return props.theme.color.grey;
      } else if (props.error) {
        return 'transparent';
      }
      return 'transparent';
    },
    Label: {
      color(props) {
        if (props.disabled) {
          return props.theme.color.grey;
        } else if (props.error) {
          return props.theme.color.primary;
        }
        return props.theme.color.primary;
      },
    },
  },
};

const Input = styled.input`
  border-width: 1px;
  border-style: solid;
  border-color: ${styles.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${styles.backgroundColor};
  font-size: ${(props) => props.theme.fontSize.s};
  padding: ${(props) => props.theme.px([3, 1.5, 1.5, 1.5])};
  ${(props) => props.block ? 'width: 100%;' : ''}
  outline: none;

  &:placeholder-shown {
    border-color: ${styles.placeholderShown.borderColor};
    background-color: ${styles.placeholderShown.backgroundColor};

    + ${/* sc-selector */Label} {
      top: ${(props) => props.theme.px(4.5)};
      font-size: ${(props) => props.theme.fontSize.s};
    }
  }

  &:focus {
    border-color: ${styles.focus.borderColor};
    background-color: ${styles.focus.backgroundColor};

    + ${/* sc-selector */Label} {
      top: ${(props) => props.theme.px(3)};
      color: ${styles.focus.Label.color};
      font-size: ${(props) => props.theme.fontSize.xxs};
    }
  }

  &::placeholder {
    visibility: hidden;
  }
`;

export default Input;
