import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import Space from '../../Space/web';
import Text from '../../Text/web';
import Label from './Label';
import Input from './Input';
import Circle from './Circle';

class RadioButton extends React.Component {
  componentDidMount() {
    const { name, value, defaultChecked } = this.props;
    const { formik } = this.context;

    if (formik && name) {
      if (defaultChecked) {
        formik.setFieldValue(name, value);
      }
    }
  }

  render() {
    const {
      className,
      name,
      label,
      value,
      ...props
    } = this.props;

    let {
      error,
    } = this.props;

    const {
      formik,
    } = this.context;

    const inputProps = { ...props };

    if (formik) {
      inputProps.checked = getIn(formik.values, name) === value;
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
        <Label htmlFor={`${name}-${value}`}>
          <Input
            id={`${name}-${value}`}
            name={name}
            value={value}
            error={error}
            {...inputProps}
          />
          <Circle />
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

RadioButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

RadioButton.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
};

RadioButton.contextTypes = {
  formik: PropTypes.object,
};

export default RadioButton;
