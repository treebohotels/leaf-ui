import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import dateFnsIsValid from 'date-fns/is_valid';
import dateFnsIsBefore from 'date-fns/is_before';
import dateFnsIsAfter from 'date-fns/is_after';
import dateFnsFormat from 'date-fns/format';
import DayPicker from 'react-day-picker';
import Flex from '../../Flex/web';
import Space from '../../Space/web';
import Size from '../../Size/web';
import Position from '../../Position/web';
import View from '../../View/web';
import TextInput from '../../TextInput/web';
import injectDatePickerStyles from '../../DatePickerInput/web/injectDatePickerStyles';
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

  componentWillMount = () => {
    const { theme } = this.props;
    injectDatePickerStyles(theme);
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
      if (dateFnsIsAfter(day, from)) {
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
      label,
      placeholder,
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
                label={label.from}
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
              label={label.to}
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
                  <Size width="580px">
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
                        navbarElement={DateRangePickerNavbar}
                        captionElement={() => null}
                        renderDay={renderDay}
                        onDayClick={this.onDayClick}
                        onDayMouseEnter={this.onDayMouseEnter}
                      />
                    </View>
                  </Size>
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
  format: PropTypes.string,
  fromMonth: PropTypes.instanceOf(Date),
  toMonth: PropTypes.instanceOf(Date),
  modifiers: PropTypes.object,
  renderDay: PropTypes.func,
  onDateRangeChange: PropTypes.func,
  onFromDateChange: PropTypes.func,
  onToDateChange: PropTypes.func,
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
