import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getIn } from 'formik';
import Space from '../../Space/web';
import Text from '../../Text/web';
import Label from './Label';
import Input from './Input';
import Box from './Box';
import Tick from './Tick';

const CheckboxWrapper = styled.div`
  display: flex;
`;

class Checkbox extends React.Component {
  componentDidMount() {
    const { name, defaultChecked } = this.props;
    const { formik } = this.context;

    if (formik) {
      formik.setFieldValue(name, !!defaultChecked);
    }
  }

  render() {
    const {
      className,
      name,
      label,
      truncate,
      error: errorMessage,
      ...props
    } = this.props;

    const {
      formik,
    } = this.context;

    const inputProps = { ...props };
    let error = errorMessage;

    if (formik) {
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
      error = formik.touched[name] && formik.errors[name];
    }

    return (
      <CheckboxWrapper className={className}>
        <div>
          <Input
            id={name}
            name={name}
            error={error}
            {...inputProps}
          />
          <Box>
            <Tick />
          </Box>
        </div>
        <Label htmlFor={name} truncate={truncate}>
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
      </CheckboxWrapper>
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
  truncate: PropTypes.bool,
};

Checkbox.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
};

Checkbox.contextTypes = {
  formik: PropTypes.object,
};

export default Checkbox;
