import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text/web';
import Container from './Container';
import Input from './Input';
import Label from './Label';

const TextInput = ({
  className,
  name,
  label,
  disabled,
  error: errorMessage,
  block,
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
    <Container className={className}>
      <Input
        id={name}
        placeholder={label}
        disabled={disabled}
        error={error}
        block={block}
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
          <Text color="red" size="xxs">
            {error}
          </Text>
        ) : null
      }
    </Container>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  block: PropTypes.bool,
};

TextInput.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  disabled: false,
  error: '',
};

TextInput.contextTypes = {
  formik: PropTypes.object,
};

export default TextInput;
