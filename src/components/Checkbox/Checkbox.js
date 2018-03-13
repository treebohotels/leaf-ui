import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Container from './Container';
import Label from './Label';
import Input from './Input';
import Box from './Box';
import Tick from './Tick';

const Checkbox = ({
  className,
  name,
  label,
  disabled,
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
    <Container className={className}>
      <Label htmlFor={name}>
        <Input
          id={name}
          {...inputProps}
          {...props}
          disabled={disabled}
          error={error}
        />
        <Box>
          <Tick />
        </Box>
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

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

Checkbox.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  disabled: false,
  error: '',
};

Checkbox.contextTypes = {
  formik: PropTypes.object,
};

export default Checkbox;
