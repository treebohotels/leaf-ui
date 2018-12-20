import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { getIn } from 'formik';
import dateFnsIsValid from 'date-fns/is_valid';
import dateFnsFormat from 'date-fns/format';
import DayPicker, { DateUtils } from 'react-day-picker';
import Card from '../../Card/web';
import Position from '../../Position/web';
import Size from '../../Size/web';
import View from '../../View/web';
import TextInput from '../../TextInput/web';
import DatePickerNavbar from './DatePickerNavbar';
import injectDatePickerStyles from './injectDatePickerStyles';

class DatePickerInput extends React.Component {
  datePickerHasFocus = false;

  timeout = {};

  constructor(props) {
    super(props);
    let selectedDays = null;
    if (props.multiple && props.defaultValue) {
      selectedDays = props.defaultValue;
    } else if (props.defaultValue) {
      selectedDays = [props.defaultValue];
    }
    this.state = {
      isOpen: false,
      selectedDays: this.makeDate(selectedDays),
    };
    this.datePickerHasFocus = false;
    this.timeout = {};
  }

  componentWillMount = () => {
    const { theme } = this.props;
    injectDatePickerStyles(theme);
  }

  componentDidMount() {
    const { selectedDays } = this.state;
    const { name, multiple, defaultValue } = this.props;
    const { formik } = this.context;
    if (formik && name) {
      formik.setFieldValue(name, multiple ? selectedDays || '' : defaultValue);
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
    const { name, onDateChange, multiple } = this.props;
    const { formik } = this.context;

    if (modifiers.disabled) {
      return;
    }
    this.setState(({ selectedDays }) => {
      let currSelectedDays;

      if (multiple && selectedDays) {
        const dayIndex = selectedDays && selectedDays.findIndex((d) => DateUtils.isSameDay(d, day));
        if (dayIndex !== -1) {
          selectedDays.splice(dayIndex, 1);
        } else {
          currSelectedDays = [...selectedDays, day];
        }
      } else {
        currSelectedDays = [day];
      }

      return {
        isOpen: !!multiple,
        selectedDays: currSelectedDays,
      };
    }, () => {
      const { selectedDays } = this.state;

      if (formik && name) {
        formik.setFieldValue(name, multiple ? selectedDays : day);
      }
      if (!multiple) {
        this.inputRef.blur();
      }
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

  formatDayForInput = (days) => {
    const { format, multiple } = this.props;
    if (days && days.length) {
      return multiple
        ? `${days.length} Date${days.length > 1 ? 's' : ''} selected`
        : dateFnsFormat(days[0], format);
    }
    return '';
  }

  storeInputRef = (ref) => {
    this.inputRef = ref;
  }

  render() {
    const {
      isOpen,
      selectedDays,
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
    } = this.props;

    let {
      error,
    } = this.props;

    const {
      formik,
    } = this.context;

    if (formik && name) {
      error = error || (getIn(formik.touched, name) && getIn(formik.errors, name));
      error = error && error.replace(name, label || name);
    }

    return (
      <Size
        className={className}
        width={size}
      >
        <View>
          <TextInput
            inputRef={this.storeInputRef}
            label={label}
            value={this.formatDayForInput(selectedDays)}
            placeholder={placeholder}
            disabled={disabled}
            size="100%"
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            autoComplete="off"
            error={error}
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
                          month={
                            selectedDays
                              ? selectedDays[selectedDays.length - 1]
                              : selectedDays
                          }
                          selectedDays={selectedDays}
                          disabledDays={disabledDays}
                          modifiers={{
                            start: selectedDays,
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
    );
  }
}

DatePickerInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
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
  theme: PropTypes.object,
  multiple: PropTypes.bool,
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
