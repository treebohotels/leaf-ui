import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import Space from '../Space';
import Text from '../Text';
import Label from './Label';
import Input from './Input';
import Box from './Box';
import Tick from './Tick';

class Checkbox extends React.Component {
  componentDidMount() {
    const { name, defaultChecked } = this.props;
    const { formik } = this.context;

    if (formik && name) {
      formik.setFieldValue(name, !!defaultChecked);
    }
  }

  render() {
    const {
      className,
      name,
      label,
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
      inputProps.checked = !!getIn(formik.values, name);
      delete inputProps.defaultChecked;
      inputProps.onChange = (...args) => {
        formik.handleChange(...args);
        props.onChange(...args);
      };
      inputProps.onBlur = (...args) => {
        formik.handleBlur(...args);
        props.onBlur(...args);
      };
      error = getIn(formik.touched, name) && getIn(formik.errors, name);
      error = error && error.replace(name, label || name);
    }

    return (
      <div className={className}>
        <Label htmlFor={name}>
          <Input
            id={name}
            name={name}
            error={error}
            {...inputProps}
          />
          <Box>
            <Tick />
          </Box>
          {label}
          {
            required ? (
              <Text component="span" color="red">
                {' *'}
              </Text>
            ) : null
          }
        </Label>
        {
          error || hint ? (
            <Space margin={[0.5, 0, 0, 0]}>
              <Text color={error ? 'red' : 'grey'} size="xs">
                {`${error || hint}`}
              </Text>
            </Space>
          ) : null
        }
      </div>
    );
  }
}

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
};

Checkbox.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
};

Checkbox.contextTypes = {
  formik: PropTypes.object,
};

export default Checkbox;
