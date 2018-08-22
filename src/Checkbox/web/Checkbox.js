import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import Space from '../../Space/web';
import Text from '../../Text/web';
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
      error: errorMessage,
      ...props
    } = this.props;

    const {
      formik,
    } = this.context;

    const inputProps = { ...props };
    let error = errorMessage;

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
        </Label>
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

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

Checkbox.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
};

Checkbox.contextTypes = {
  formik: PropTypes.object,
};

export default Checkbox;
