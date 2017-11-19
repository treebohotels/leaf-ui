import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const modifierColor = (valid = 'leaf', invalid = 'dangerDark', disabled = 'rock') => (props) => {
  if (props.disabled) return props.theme.color[disabled];
  return props.error ? props.theme.color[invalid] : props.theme.color[valid];
};

const InputContainer = styled.div`
  position: relative;
  padding: ${(p) => p.theme.px([2, 0])};
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  color: ${(p) => p.theme.color.slate};
  font-size: ${(p) => p.theme.fontSize.xxs};
  transform: translate(0, 0);
  transition: all 0.15s ease-in-out;
`;

const Input = styled.input`
  background: transparent;
  border: 1px solid ${(p) => p.theme.color.slate};
  border-width: 0 0 1px;
  padding: ${(p) => p.theme.px([1, 0])};

  &:focus {
    border-color: ${modifierColor()};

    + ${/* sc-selector */Label} {
      color: ${modifierColor()};
    }
  }

  &::placeholder {
    visibility: hidden;
  }

  &:placeholder-shown {
    + ${/* sc-selector */Label} {
      color: ${(p) => p.theme.color.rock};
      transform: translate(0, ${(p) => p.theme.px(3)});
    }
  }
`;

const TextInput = ({
  name,
  label,
  error: errorMessage,
  ...props
}, {
  formik,
}) => {
  const inputProps = { name };
  let error = errorMessage;

  if (formik) {
    inputProps.value = formik.values[name];
    inputProps.onChange = formik.handleChange;
    inputProps.onBlur = formik.handleBlur;
    error = formik.touched[name] && formik.errors[name];
  }

  return (
    <InputContainer>
      <Input
        id={name}
        placeholder={label}
        error={error}
        {...inputProps}
        {...props}
      />
      <Label
        htmlFor={name}
        error={error}
      >
        {label}
      </Label>
      {
        error ? (
          <Text color="dangerDark" size="xxs">
            {error}
          </Text>
        ) : null
      }
    </InputContainer>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  error: '',
};

TextInput.contextTypes = {
  formik: PropTypes.object,
};

export default TextInput;
