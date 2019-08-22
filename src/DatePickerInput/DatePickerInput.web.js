import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { getIn } from 'formik';
import dateFnsIsValid from 'date-fns/is_valid';
import dateFnsFormat from 'date-fns/format';
import DayPicker from 'react-day-picker';
import Card from '../Card';
import Position from '../Position';
import Size from '../Size';
import View from '../View';
import TextInput from '../TextInput';
import DatePickerNavbar from './DatePickerNavbar';
import DatePickerStyles from './DatePickerStyles';

class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedDay: this.makeDate(this.props.defaultValue),
    };
    this.datePickerHasFocus = false;
    this.timeout = {};
  }

  componentDidMount() {
    const { selectedDay } = this.state;
    const { name } = this.props;
    const { formik } = this.context;
    if (formik && name) {
      formik.setFieldValue(name, selectedDay || '');
    }
  }

  componentWillUnmount = () => {
    clearTimeout(this.timeout.inputBlur);
    clearTimeout(this.timeout.datePickerBlur);
  }

  makeDate = (date) => {
    if (date && dateFnsIsValid(new Date(date))) {
      const clonedDate = new Date(date);
      clonedDate.setHours(12, 0, 0, 0);
      return clonedDate;
    }
    return undefined;
  }

  onDayClick = (day, modifiers) => {
    const { name, onDateChange } = this.props;
    const { formik } = this.context;

    if (modifiers.disabled) {
      return;
    }

    this.setState({
      isOpen: false,
      selectedDay: day,
    }, () => {
      if (formik && name) {
        formik.setFieldValue(name, day);
      }
      this.inputRef.blur();
      onDateChange(day, modifiers);
    });
  }

  onInputFocus = () => {
    this.setState({ isOpen: true });
  }

  onInputBlur = () => {
    this.timeout.inputBlur = setTimeout(() => {
      if (!this.datePickerHasFocus) {
        this.setState({ isOpen: false });
      }
    }, 1);
  }

  onDatePickerFocus = (e) => {
    e.preventDefault();
    this.datePickerHasFocus = true;
    this.inputRef.focus();
  }

  onDatePickerBlur = () => {
    this.timeout.datePickerBlur = setTimeout(() => {
      this.datePickerHasFocus = false;
    }, 1);
  }

  formatDayForInput = (day) => {
    const { format } = this.props;
    if (day) {
      return dateFnsFormat(day, format);
    }
    return '';
  }

  storeInputRef = (ref) => {
    this.inputRef = ref;
  }

  render() {
    const {
      isOpen,
      selectedDay,
    } = this.state;

    const {
      className,
      name,
      label,
      placeholder,
      disabled,
      size,
      hint,
      required,
      fromMonth,
      toMonth,
      renderDay,
      disabledDays,
      error,
    } = this.props;

    const {
      formik,
    } = this.context;

    let errorMessage = null;

    if (formik && name) {
      errorMessage = error || (getIn(formik.touched, name) && getIn(formik.errors, name));
      errorMessage = errorMessage && errorMessage.replace(name, label || name);
    }

    return (
      <React.Fragment>
        <DatePickerStyles />
        <Size
          className={className}
          width={size}
        >
          <View>
            <TextInput
              inputRef={this.storeInputRef}
              label={label}
              value={this.formatDayForInput(selectedDay)}
              placeholder={placeholder}
              disabled={disabled}
              size="100%"
              onFocus={this.onInputFocus}
              onBlur={this.onInputBlur}
              autoComplete="off"
              error={errorMessage}
              hint={hint}
              required={required}
            />
            {
              isOpen ? (
                <Position position="relative">
                  <View>
                    <Position
                      position="absolute"
                      top={0}
                      left={0}
                    >
                      <View
                        tabIndex={0}
                        onFocus={this.onDatePickerFocus}
                        onBlur={this.onDatePickerBlur}
                      >
                        <Card
                          borderStyle="none"
                          elevated
                        >
                          <DayPicker
                            numberOfMonths={1}
                            fromMonth={fromMonth}
                            toMonth={toMonth}
                            month={selectedDay}
                            selectedDays={[selectedDay]}
                            disabledDays={disabledDays}
                            modifiers={{
                              start: [selectedDay],
                            }}
                            navbarElement={DatePickerNavbar}
                            captionElement={() => null}
                            renderDay={renderDay}
                            onDayClick={this.onDayClick}
                          />
                        </Card>
                      </View>
                    </Position>
                  </View>
                </Position>
              ) : null
            }
          </View>
        </Size>
      </React.Fragment>
    );
  }
}

DatePickerInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  format: PropTypes.string,
  fromMonth: PropTypes.instanceOf(Date),
  toMonth: PropTypes.instanceOf(Date),
  renderDay: PropTypes.func,
  onDateChange: PropTypes.func,
  disabledDays: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  error: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
};

DatePickerInput.defaultProps = {
  size: 25,
  placeholder: 'YYYY-MM-DD',
  format: 'YYYY-MM-DD',
  onDateChange: () => {},
};

DatePickerInput.contextTypes = {
  formik: PropTypes.object,
};

export default withTheme(
  DatePickerInput,
);
