import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import Space from '../../Space/web';
import Text from '../../Text/web';
import Input from './Input';
import Label from './Label';

class TextInput extends React.Component {
  componentDidMount() {
    const { name, defaultValue } = this.props;
    const { formik } = this.context;

    if (formik) {
      if (defaultValue != null) {
        formik.setFieldValue(name, defaultValue);
      } else {
        formik.setFieldValue(name, '');
      }
    }
  }

  render() {
    const {
      className,
      inputRef,
      name,
      label,
      error: errorMessage,
      ...props
    } = this.props;

    const {
      formik,
    } = this.context;

    const inputProps = { ...props };
    let error = errorMessage;

    if (formik) {
      if (inputProps.defaultValue) {
        delete inputProps.defaultValue;
      }
      inputProps.value = getIn(formik.values, name);
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
      <div className={className}>
        <Label htmlFor={name}>
          {label}
        </Label>
        <Input
          innerRef={inputRef}
          id={name}
          name={name}
          error={error}
          {...inputProps}
        />
        {
          error ? (
            <Space margin={[0.5, 0, 0, 0]}>
              <Text color="red" size="xxs">
                {error}
              </Text>
            </Space>
          ) : null
        }
      </div>
    );
  }
}

TextInput.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
};

TextInput.contextTypes = {
  formik: PropTypes.object,
};

export default TextInput;
