import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const modifierColor = (valid = 'leaf', invalid = 'dangerDark', disabled = 'rock') => (props) => {
  if (props.disabled) return props.theme.color[disabled];
  return props.error ? props.theme.color[invalid] : props.theme.color[valid];
};

const CheckboxContainer = styled.div`
  position: relative;
  padding: ${(p) => p.theme.px([2, 0])};
`;

const Label = styled.label`
  display: flex;
  cursor: pointer;
`;

const Box = styled.span`
  display: flex;
  width: ${(p) => p.theme.px(2)};
  height: ${(p) => p.theme.px(2)};
  margin-right: ${(p) => p.theme.px(1)};
  border-radius: 3px;
`;

const Tick = styled.svg`
  width: 100%;
  height: 100%;
  padding: 0 1px;
  display: none;
`;

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
  border: 0;
  visibility: visible;
  white-space: nowrap;

  + ${/* sc-selector */Box} {
    border: 1px solid ${modifierColor('slate', 'slate')};
  }

  &:focus {
    + ${/* sc-selector */Box} {
      box-shadow: 0 0 0 1px ${modifierColor()};
    }
  }

  &:checked {
    + ${/* sc-selector */Box} {
      border-color: ${modifierColor()};

      ${/* sc-selector */Tick} {
        fill: ${modifierColor()};
        display: block;
      }
    }
  }
`;

const Checkbox = ({
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
    inputProps.checked = !!formik.values[name];
    inputProps.onChange = formik.handleChange;
    inputProps.onBlur = formik.handleBlur;
    error = formik.touched[name] && formik.errors[name];
  }

  return (
    <CheckboxContainer>
      <Label htmlFor={name}>
        <Input
          id={name}
          {...inputProps}
          {...props}
          error={error}
        />
        <Box>
          <Tick fillRule="evenodd" name="checkmark" role="img" viewBox="0 0 12 9">
            <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z" />
          </Tick>
        </Box>
        {label}
      </Label>
      {
        error ? (
          <Text color="dangerDark" size="xxs">
            {error}
          </Text>
        ) : null
      }
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

Checkbox.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  error: '',
};

Checkbox.contextTypes = {
  formik: PropTypes.object,
};

export default Checkbox;
