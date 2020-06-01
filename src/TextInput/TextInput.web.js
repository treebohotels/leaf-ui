import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import styled from 'styled-components';
import Size from '../Size';
import View from '../View';
import Space from '../Space';
import Text from '../Text';
import Input from './Input';
import Label from './Label';
import Position from '../Position';

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
    const { className, inputRef, name, label, size, hint, required, icon, ...props } = this.props;

    let { error } = this.props;

    const { formik } = this.context;

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

    const InputContainer = styled(View)`
      position: relative;
    `;

    return (
      <Size className={className} width={size}>
        <InputContainer>
          {label ? (
            <Label htmlFor={name}>
              {label}
              {required ? (
                <Text component="span" color="red">
                  {' *'}
                </Text>
              ) : null}
            </Label>
          ) : null}
          {icon ? (
            <Position position="absolute" top={4.2} left={1}>
              {icon}
            </Position>
          ) : null}
          <Input ref={inputRef} id={name} name={name} error={error} icon={icon} {...inputProps} />

          {error || hint ? (
            <Space margin={[0.5, 0, 0, 0]}>
              <Text color={error ? 'red' : 'grey'} size="xs">
                {`${error || hint}`}
              </Text>
            </Space>
          ) : null}
        </InputContainer>
      </Size>
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
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.node,
};

TextInput.defaultProps = {
  type: 'text',
  size: 25,
  onChange: () => {},
  onBlur: () => {},
};

TextInput.contextTypes = {
  formik: PropTypes.object,
};

export default TextInput;
