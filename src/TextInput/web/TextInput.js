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

    if (formik && name) {
      if (defaultValue == null) {
        formik.setFieldValue(name, '');
      } else {
        formik.setFieldValue(name, defaultValue);
      }
    }
  }

  render() {
    const {
      className,
      inputRef,
      name,
      label,
      ...props
    } = this.props;

    let {
      error,
    } = this.props;

    const {
      formik,
    } = this.context;

    const inputProps = { ...props };

    if (formik && name) {
      inputProps.value = getIn(formik.values, name);
      delete inputProps.defaultValue;
      inputProps.onChange = (...args) => {
        formik.handleChange(...args);
        props.onChange(...args);
      };
      inputProps.onBlur = (...args) => {
        formik.handleBlur(...args);
        props.onBlur(...args);
      };
      error = error || (getIn(formik.touched, name) && getIn(formik.errors, name));
    }

    return (
      <div className={className}>
        {
          label ? (
            <Label htmlFor={name}>
              {label}
            </Label>
          ) : null
        }
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
              <Text color="red" size="xs">
                {`${error}`}
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
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
};

TextInput.contextTypes = {
  formik: PropTypes.object,
};

export default TextInput;
