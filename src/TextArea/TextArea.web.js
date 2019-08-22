import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import Size from '../Size';
import View from '../View';
import Space from '../Space';
import Text from '../Text';
import Label from './Label';
import Input from './Input';

class TextArea extends React.Component {
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
      size,
      hint,
      required,
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
      error = error && error.replace(name, label || name);
    }

    return (
      <Size
        className={className}
        width={size}
      >
        <View>
          {
            label ? (
              <Label htmlFor={name}>
                {label}
                {
                  required ? (
                    <Text component="span" color="red">
                      {' *'}
                    </Text>
                  ) : null
                }
              </Label>
            ) : null
          }
          <Input
            ref={inputRef}
            id={name}
            name={name}
            error={error}
            {...inputProps}
          />
          {
            error || hint ? (
              <Space margin={[0.5, 0, 0, 0]}>
                <Text color={error ? 'red' : 'grey'} size="xs">
                  {`${error || hint}`}
                </Text>
              </Space>
            ) : null
          }
        </View>
      </Size>
    );
  }
}

TextArea.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  size: 25,
  onChange: () => {},
  onBlur: () => {},
};

TextArea.contextTypes = {
  formik: PropTypes.object,
};

export default TextArea;
