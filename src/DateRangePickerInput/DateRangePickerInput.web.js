import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { getIn } from 'formik';
import dateFnsIsValid from 'date-fns/is_valid';
import dateFnsIsBefore from 'date-fns/is_before';
import dateFnsFormat from 'date-fns/format';
import dateFnsDifferenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import DayPicker from 'react-day-picker';
import Card from '../Card';
import Flex from '../Flex';
import Space from '../Space';
import Size from '../Size';
import Position from '../Position';
import View from '../View';
import TextInput from '../TextInput';
import DatePickerStyles from '../DatePickerInput/DatePickerStyles';
import DateRangePickerNavbar from './DateRangePickerNavbar';

class DateRangePickerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      from: this.makeDate(this.props.defaultValue.from),
      to: this.makeDate(this.props.defaultValue.to),
      enteredTo: this.makeDate(this.props.defaultValue.to),
    };
    this.datePickerHasFocus = false;
    this.timeout = {};
  }

  componentDidMount() {
    const { from, to } = this.state;
    const { name } = this.props;
    const { formik } = this.context;
    if (formik && name.from && name.to) {
      formik.setFieldValue(name.from, from || '');
      formik.setFieldValue(name.to, to || '');
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

  onFromInputFocus = () => {
    setTimeout(() => {
      this.setState({ isOpen: 'from' });
    }, 1);
  }

  onToInputFocus = () => {
    const { from } = this.state;
    if (!from) {
      this.fromInputRef.focus();
    } else {
      setTimeout(() => {
        this.setState({ isOpen: 'to' });
      }, 1);
    }
  }

  onInputBlur = () => {
    this.timeout.inputBlur = setTimeout(() => {
      if (!this.datePickerHasFocus) {
        this.setState({ isOpen: false });
      }
    }, 1);
  }

  onDatePickerFocus = (e) => {
    const { isOpen } = this.state;
    e.preventDefault();
    this.datePickerHasFocus = true;
    if (isOpen === 'from') {
      this.fromInputRef.focus();
    } else if (isOpen === 'to') {
      this.toInputRef.focus();
    }
  }

  onDatePickerBlur = () => {
    this.timeout.datePickerBlur = setTimeout(() => {
      this.datePickerHasFocus = false;
    }, 1);
  }

  onDayClick = (day, modifiers) => {
    const { isOpen, from, to } = this.state;
    const {
      name,
      onDateRangeChange,
      onFromDateChange,
      onToDateChange,
      minRange,
    } = this.props;
    const { formik } = this.context;

    if (modifiers.disabled) {
      return;
    }

    if (isOpen === 'from') {
      if (dateFnsIsBefore(day, to)) {
        this.setState({
          isOpen: !to ? 'to' : false,
          from: day,
        }, () => {
          if (formik && name.from && name.to) {
            formik.setFieldValue(name.from, day);
          }
          if (!to) {
            this.toInputRef.focus();
            onFromDateChange(day, modifiers);
          } else {
            this.fromInputRef.blur();
            onFromDateChange(day, modifiers);
            onDateRangeChange({ from: day, to }, modifiers);
          }
        });
      } else {
        this.setState({
          from: day,
          to: undefined,
          enteredTo: undefined,
        }, () => {
          if (formik && name.from && name.to) {
            formik.setFieldValue(name.from, day);
            formik.setFieldValue(name.to, '');
          }
          this.toInputRef.focus();
          onFromDateChange(day, modifiers);
        });
      }
    } else if (isOpen === 'to') {
      if (dateFnsDifferenceInCalendarDays(day, from) >= minRange) {
        this.setState({
          isOpen: false,
          to: day,
          enteredTo: day,
        }, () => {
          if (formik && name.from && name.to) {
            formik.setFieldValue(name.to, day);
          }
          this.toInputRef.blur();
          onToDateChange(day, modifiers);
          onDateRangeChange({ from, to: day }, modifiers);
        });
      } else {
        this.setState({
          from: day,
          to: undefined,
          enteredTo: undefined,
        }, () => {
          if (formik && name.from && name.to) {
            formik.setFieldValue(name.from, day);
            formik.setFieldValue(name.to, '');
          }
          onFromDateChange(day, modifiers);
        });
      }
    }
  }

  onDayMouseEnter = (day) => {
    const { to } = this.state;
    if (!to) {
      this.setState({ enteredTo: day });
    }
  }

  formatDayForInput = (day) => {
    const { format } = this.props;
    if (day) {
      return dateFnsFormat(day, format);
    }
    return '';
  }

  storeToInputRef = (ref) => {
    this.toInputRef = ref;
  }

  storeFromInputRef = (ref) => {
    this.fromInputRef = ref;
  }

  render() {
    const {
      isOpen,
      from,
      to,
      enteredTo,
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
      format,
      fromMonth,
      toMonth,
      modifiers,
      renderDay,
      disabledDays,
      error,
    } = this.props;

    const {
      formik,
    } = this.context;

    const errorMessage = {};

    if (formik && name) {
      errorMessage.from = error.from
        || (getIn(formik.touched, name.from) && getIn(formik.errors, name.from));
      errorMessage.from = errorMessage.from
        && errorMessage.from.replace(name.from, label.from || name.from);
      errorMessage.to = error.to
        || (getIn(formik.touched, name.to) && getIn(formik.errors, name.to));
      errorMessage.to = errorMessage.to && errorMessage.to.replace(name.to, label.to || name.to);
    }

    return (
      <React.Fragment>
        <DatePickerStyles />
        <Size
          className={className}
          width={size}
        >
          <View>
            <Flex flexDirection="row">
              <View>
                <Space margin={[0, 2, 0, 0]}>
                  <TextInput
                    inputRef={this.storeFromInputRef}
                    label={label.from}
                    value={this.formatDayForInput(from)}
                    placeholder={placeholder.from || format}
                    disabled={disabled.from}
                    size="100%"
                    onFocus={this.onFromInputFocus}
                    onBlur={this.onInputBlur}
                    autoComplete="off"
                    error={errorMessage.from}
                    hint={hint.from}
                    required={required.from}
                  />
                </Space>
                <TextInput
                  inputRef={this.storeToInputRef}
                  label={label.to}
                  value={this.formatDayForInput(to)}
                  placeholder={placeholder.to || format}
                  disabled={disabled.to}
                  size="100%"
                  onFocus={this.onToInputFocus}
                  onBlur={this.onInputBlur}
                  autoComplete="off"
                  error={errorMessage.to}
                  hint={hint.to}
                  required={required.to}
                />
              </View>
            </Flex>
            {
              isOpen ? (
                <Position position="relative">
                  <View>
                    <Position
                      position="absolute"
                      top={0}
                      left={0}
                    >
                      <Size width="581px">
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
                              numberOfMonths={2}
                              fromMonth={fromMonth}
                              toMonth={toMonth}
                              month={from}
                              selectedDays={[from, { from, to: enteredTo }]}
                              disabledDays={disabledDays}
                              modifiers={{
                                start: [from],
                                end: [enteredTo],
                                ...modifiers,
                              }}
                              navbarElement={DateRangePickerNavbar}
                              captionElement={() => null}
                              renderDay={renderDay}
                              onDayClick={this.onDayClick}
                              onDayMouseEnter={this.onDayMouseEnter}
                            />
                          </Card>
                        </View>
                      </Size>
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

DateRangePickerInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  label: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  placeholder: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  defaultValue: PropTypes.shape({
    from: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]),
    to: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]),
  }),
  disabled: PropTypes.shape({
    from: PropTypes.bool,
    to: PropTypes.bool,
  }),
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  error: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  hint: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  required: PropTypes.shape({
    from: PropTypes.bool,
    to: PropTypes.bool,
  }),
  format: PropTypes.string,
  minRange: PropTypes.number,
  fromMonth: PropTypes.instanceOf(Date),
  toMonth: PropTypes.instanceOf(Date),
  modifiers: PropTypes.object,
  renderDay: PropTypes.func,
  onDateRangeChange: PropTypes.func,
  onFromDateChange: PropTypes.func,
  onToDateChange: PropTypes.func,
  disabledDays: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

DateRangePickerInput.defaultProps = {
  name: {
    from: undefined,
    to: undefined,
  },
  label: {
    from: undefined,
    to: undefined,
  },
  placeholder: {
    from: 'From: YYYY-MM-DD',
    to: 'To: YYYY-MM-DD',
  },
  defaultValue: {
    from: undefined,
    to: undefined,
  },
  disabled: {
    from: false,
    to: false,
  },
  size: 52,
  error: {
    from: undefined,
    to: undefined,
  },
  hint: {
    from: undefined,
    to: undefined,
  },
  required: {
    from: false,
    to: false,
  },
  minRange: 1,
  format: 'YYYY-MM-DD',
  onDateRangeChange: () => {},
  onFromDateChange: () => {},
  onToDateChange: () => {},
};

DateRangePickerInput.contextTypes = {
  formik: PropTypes.object,
};

export default withTheme(
  DateRangePickerInput,
);
