import styled from 'styled-components';

const styles = {
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
};

const Input = styled.input`
  border-width: 1px;
  border-style: solid;
  border-color: ${styles.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${styles.backgroundColor};
  font-size: ${(props) => props.theme.fontSize.s};
  padding: ${(props) => props.theme.px(1.5)};
  ${(props) => (props.icon ? `padding-left: ${props.theme.px(4)}` : '')};
  width: 100%;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.white};
  }

  &::placeholder {
    color: ${(props) => props.theme.color.grey};
  }
`;

export default Input;
