import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import dateFnsIsBefore from 'date-fns/is_before';
import dateFnsIsAfter from 'date-fns/is_after';
import dateFnsFormat from 'date-fns/format';
import DayPicker from 'react-day-picker';
import Flex from '../../Flex/web';
import Space from '../../Space/web';
import Position from '../../Position/web';
import View from '../../View/web';
import TextInput from '../../TextInput/web';
import DatePickerNavbar from '../../DatePickerInput/web/DatePickerNavbar';
import injectDatePickerStyles from '../../DatePickerInput/web/injectDatePickerStyles';

class DateRangePickerInput extends React.Component {
  state = {
    isOpen: false,
    from: this.props.defaultValue.from,
    to: this.props.defaultValue.to,
    enteredTo: this.props.defaultValue.to,
  };

  componentWillMount = () => {
    const { theme } = this.props;
    injectDatePickerStyles(theme);
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
    const { name, onDateChange } = this.props;
    const { formik } = this.context;

    if (modifiers.disabled) {
      return;
    }

    if (isOpen === 'from') {
      if (dateFnsIsAfter(day, to)) {
        this.setState({
          from: day,
          to: undefined,
          enteredTo: undefined,
        }, () => {
          if (formik) {
            formik.setFieldValue(name.from, this.formatDayForInput(day));
            formik.setFieldValue(name.to, '');
          }
          this.toInputRef.focus();
        });
      } else {
        this.setState({
          isOpen: !to ? 'to' : false,
          from: day,
        }, () => {
          if (formik) {
            formik.setFieldValue(name.from, this.formatDayForInput(day));
          }
          if (!to) {
            this.toInputRef.focus();
          } else {
            this.fromInputRef.blur();
          }
        });
      }
    } else if (isOpen === 'to') {
      if (dateFnsIsBefore(day, from)) {
        this.setState({
          from: day,
          to: undefined,
          enteredTo: undefined,
        }, () => {
          if (formik) {
            formik.setFieldValue(name.from, this.formatDayForInput(day));
            formik.setFieldValue(name.to, '');
          }
        });
      } else {
        this.setState({
          isOpen: false,
          to: day,
          enteredTo: day,
        }, () => {
          if (formik) {
            formik.setFieldValue(name.to, this.formatDayForInput(day));
          }
          this.toInputRef.blur();
        });
      }
    }

    onDateChange(day, modifiers);
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

  datePickerHasFocus = false

  timeout = {}

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
      defaultValue,
      disabled,
      format,
      fromMonth,
      toMonth,
      modifiers,
      renderDay,
      disabledDays,
    } = this.props;

    return (
      <View className={className}>
        <Flex flexDirection="row">
          <View>
            <Space margin={[0, 2, 0, 0]}>
              <TextInput
                inputRef={this.storeFromInputRef}
                name={name.from}
                label={label.from}
                defaultValue={this.formatDayForInput(defaultValue.from)}
                value={this.formatDayForInput(from)}
                placeholder={placeholder.from || format}
                disabled={disabled.from}
                onFocus={this.onFromInputFocus}
                onBlur={this.onInputBlur}
                autoComplete="off"
              />
            </Space>
            <TextInput
              inputRef={this.storeToInputRef}
              name={name.to}
              label={label.to}
              defaultValue={this.formatDayForInput(defaultValue.to)}
              value={this.formatDayForInput(to)}
              placeholder={placeholder.to || format}
              disabled={disabled.to}
              onFocus={this.onToInputFocus}
              onBlur={this.onInputBlur}
              autoComplete="off"
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
                  <View
                    tabIndex={0}
                    onFocus={this.onDatePickerFocus}
                    onBlur={this.onDatePickerBlur}
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
                      navbarElement={<DatePickerNavbar />}
                      captionElement={() => null}
                      renderDay={renderDay}
                      onDayClick={this.onDayClick}
                      onDayMouseEnter={this.onDayMouseEnter}
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
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  }),
  disabled: PropTypes.shape({
    from: PropTypes.bool,
    to: PropTypes.bool,
  }),
  format: PropTypes.string,
  fromMonth: PropTypes.instanceOf(Date),
  toMonth: PropTypes.instanceOf(Date),
  modifiers: PropTypes.object,
  renderDay: PropTypes.func,
  onDateChange: PropTypes.func,
  theme: PropTypes.object,
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
  format: 'YYYY-MM-DD',
  fromMonth: new Date(),
  onDateChange: () => {},
};

DateRangePickerInput.contextTypes = {
  formik: PropTypes.object,
};

export default withTheme(
  DateRangePickerInput,
);
