import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import dateFnsFormat from 'date-fns/format';
import DayPicker, { DateUtils } from 'react-day-picker';
import Position from '../../Position/web';
import View from '../../View/web';
import TextInput from '../../TextInput/web';
import DatePickerNavbar from './DatePickerNavbar';
import injectDatePickerStyles from './injectDatePickerStyles';

class DatePickerInput extends React.Component {
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
      selectedDays,
    };
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
    const { name, onDateChange, multiple } = this.props;
    const { formik } = this.context;
    let selectedDays = this.state.selectedDays ? [...this.state.selectedDays] : null;

    if (modifiers.disabled) {
      return;
    }

    if (multiple && selectedDays) {
      const dayIndex = selectedDays && selectedDays.findIndex((d) => DateUtils.isSameDay(d, day));
      if (dayIndex !== -1) {
        selectedDays.splice(dayIndex, 1);
      } else {
        selectedDays = [...selectedDays, day];
      }
    } else {
      selectedDays = [day];
    }
    this.setState({
      isOpen: !!multiple,
      selectedDays,
    }, () => {
      if (formik && name) {
        formik.setFieldValue(name, this.formatDayForInput(day));
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

  datePickerHasFocus = false

  timeout = {}

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
      defaultValue,
      disabled,
      fromMonth,
      toMonth,
      renderDay,
      disabledDays,
      block,
    } = this.props;

    return (
      <View className={className}>
        <TextInput
          inputRef={this.storeInputRef}
          name={name}
          label={label}
          defaultValue={this.formatDayForInput(defaultValue)}
          value={this.formatDayForInput(selectedDays)}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          block={block}
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
                      month={selectedDays ?
                        selectedDays[selectedDays.length - 1]
                        : selectedDays
                      }
                      selectedDays={selectedDays}
                      disabledDays={disabledDays}
                      modifiers={{
                        start: selectedDays,
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
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    PropTypes.instanceOf(Date),
  ]),
  disabled: PropTypes.bool,
  format: PropTypes.string,
  fromMonth: PropTypes.instanceOf(Date),
  toMonth: PropTypes.instanceOf(Date),
  renderDay: PropTypes.func,
  onDateChange: PropTypes.func,
  theme: PropTypes.object,
  multiple: PropTypes.bool,
  block: PropTypes.bool,
  disabledDays: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

DatePickerInput.defaultProps = {
  placeholder: 'YYYY-MM-DD',
  format: 'YYYY-MM-DD',
  fromMonth: new Date(),
  onDateChange: () => {},
};

DatePickerInput.contextTypes = {
  formik: PropTypes.object,
};

export default withTheme(
  DatePickerInput,
);
