import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text/web';
import Container from './Container';
import Input from './Input';
import Label from './Label';

class TextInput extends React.Component {
  componentDidMount() {
    const { name, defaultValue } = this.props;
    const { formik } = this.context;

    if (formik) {
      if (defaultValue) {
        formik.setFieldValue(name, defaultValue);
      }
    }
  }

  render() {
    const {
      className,
      name,
      label,
      disabled,
      error: errorMessage,
      block,
      ...props
    } = this.props;

    const {
      formik,
    } = this.context;

    const inputProps = { name, ...props };
    let error = errorMessage;

    if (formik) {
      inputProps.value = formik.values[name];
      delete inputProps.defaultValue;
      inputProps.onChange = (...args) => {
        formik.handleChange(...args);
        props.onChange(...args);
      };
      inputProps.onBlur = (...args) => {
        formik.handleBlur(...args);
        props.onBlur(...args);
      };
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
  }
}

TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  block: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

TextInput.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  disabled: false,
  error: '',
  onChange: () => {},
  onBlur: () => {},
};

TextInput.contextTypes = {
  formik: PropTypes.object,
};

export default TextInput;
