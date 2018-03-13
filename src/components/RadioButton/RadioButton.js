import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Container from './Container';
import Label from './Label';
import Input from './Input';
import Circle from './Circle';

const RadioButton = ({
  className,
  name,
  label,
  value,
  disabled,
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
    <Container className={className}>
      <Label htmlFor={`${name}-${value}`}>
        <Input
          id={`${name}-${value}`}
          {...inputProps}
          {...props}
          value={value}
          disabled={disabled}
          error={error}
        />
        <Circle />
        {label}
      </Label>
      {
        error ? (
          <Text color="red" size="xxs">
            {error}
          </Text>
        ) : null
      }
    </Container>
  );
};

RadioButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

RadioButton.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  value: 'defaultValue',
  disabled: false,
  error: '',
};

RadioButton.contextTypes = {
  formik: PropTypes.object,
};

export default RadioButton;
