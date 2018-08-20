import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import dateFnsFormat from 'date-fns/format';
import DayPicker from 'react-day-picker';
import Position from '../../Position/web';
import View from '../../View/web';
import TextInput from '../../TextInput/web';
import DatePickerNavbar from './DatePickerNavbar';
import injectDatePickerStyles from './injectDatePickerStyles';

class DatePickerInput extends React.Component {
  state = {
    isOpen: false,
    selectedDay: this.props.defaultValue,
  }

  componentWillMount = () => {
    const { theme } = this.props;
    injectDatePickerStyles(theme);
  }

  componentWillUnmount = () => {
    clearTimeout(this.timeout.inputBlur);
    clearTimeout(this.timeout.datePickerBlur);
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
      if (formik) {
        formik.setFieldValue(name, this.formatDayForInput(day));
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

  datePickerHasFocus = false

  timeout = {}

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
      defaultValue,
      disabled,
      fromMonth,
      toMonth,
      renderDay,
      disabledDays,
    } = this.props;

    return (
      <View className={className}>
        <TextInput
          inputRef={this.storeInputRef}
          name={name}
          label={label}
          defaultValue={this.formatDayForInput(defaultValue)}
          value={this.formatDayForInput(selectedDay)}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          autoComplete="off"
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
                      navbarElement={<DatePickerNavbar />}
                      captionElement={() => null}
                      renderDay={renderDay}
                      onDayClick={this.onDayClick}
                    />
                  </View>
                </Position>
              </View>
            </Position>
          ) : null
        }
      </View>
    );
  }
}

DatePickerInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  format: PropTypes.string,
  fromMonth: PropTypes.instanceOf(Date),
  toMonth: PropTypes.instanceOf(Date),
  renderDay: PropTypes.func,
  onDateChange: PropTypes.func,
  theme: PropTypes.object,
  disabledDays: PropTypes.oneOfType([
    PropTypes.array, PropTypes.object,
  ]),
};

DatePickerInput.defaultProps = {
  placeholder: 'YYYY-MM-DD',
  format: 'YYYY-MM-DD',
  fromMonth: new Date(),
  onDateChange: () => {},
  disabledDays: [{ before: new Date() }],
};

DatePickerInput.contextTypes = {
  formik: PropTypes.object,
};

export default withTheme(
  DatePickerInput,
);
