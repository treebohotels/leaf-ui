import React from 'react';
import PropTypes from 'prop-types';
import Spacer from '../../Spacer/web';
import Text from '../../Text/web';
import Container from './Container';
import Label from './Label';
import Input from './Input';
import Box from './Box';
import Tick from './Tick';

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
      disabled,
      error: errorMessage,
      ...props
    } = this.props;

    const {
      formik,
    } = this.context;

    const inputProps = { ...props };
    let error = errorMessage;

    if (formik) {
      inputProps.checked = !!formik.values[name];
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
      <Container className={className}>
        <Label htmlFor={name}>
          <Input
            id={name}
            name={name}
            disabled={disabled}
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
            <Spacer margin={[0.5, 0, 0, 0]}>
              <Text color="red" size="xxs">
                {error}
              </Text>
            </Spacer>
          ) : null
        }
      </Container>
    );
  }
}

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

Checkbox.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  disabled: false,
  error: '',
  onChange: () => {},
  onBlur: () => {},
};

Checkbox.contextTypes = {
  formik: PropTypes.object,
};

export default Checkbox;
