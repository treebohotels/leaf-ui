import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const modifierColor = (valid = 'leaf', invalid = 'dangerDark', disabled = 'rock') => (props) => {
  if (props.disabled) return props.theme.color[disabled];
  return props.error ? props.theme.color[invalid] : props.theme.color[valid];
};

const RadioButtonContainer = styled.div`
  position: relative;
  padding: ${(p) => p.theme.px([2, 0])};
`;

const Label = styled.label`
  display: flex;
  cursor: pointer;
`;

const Circle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.theme.px(2)};
  height: ${(p) => p.theme.px(2)};
  border-radius: 50%;
  margin-right: ${(p) => p.theme.px(1)};
`;

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
    border: 1px solid ${modifierColor('slate', 'slate')};
  }

  &:focus {
    + ${/* sc-selector */Circle} {
      box-shadow: 0 0 0 1px ${modifierColor()};
    }
  }

  &:checked {
    + ${/* sc-selector */Circle} {
      border-color: ${modifierColor()};

      &::before {
        content: '';
        width: ${(p) => p.theme.px(1)};
        height: ${(p) => p.theme.px(1)};
        border-radius: 50%;
        background-color: ${modifierColor()};
      }
    }
  }
`;

const RadioButton = ({
  name,
  label,
  value,
  error: errorMessage,
  ...props
}, {
  formik,
}) => {
  const inputProps = { name };
  let error = errorMessage;

  if (formik) {
    inputProps.checked = formik.values[name] === value;
    inputProps.onChange = formik.handleChange;
    inputProps.onBlur = formik.handleBlur;
    error = formik.touched[name] && formik.errors[name];
  }

  return (
    <RadioButtonContainer>
      <Label htmlFor={`${name}-${value}`}>
        <Input
          id={`${name}-${value}`}
          {...inputProps}
          {...props}
          value={value}
          error={error}
        />
        <Circle />
        {label}
      </Label>
      {
        error ? (
          <Text color="dangerDark" size="xxs">
            {error}
          </Text>
        ) : null
      }
    </RadioButtonContainer>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

RadioButton.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  value: 'defaultValue',
  error: '',
};

RadioButton.contextTypes = {
  formik: PropTypes.object,
};

export default RadioButton;
