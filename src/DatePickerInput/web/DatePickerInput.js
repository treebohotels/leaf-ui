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
    const { name } = this.props;
    const { formik } = this.context;

    if (formik && name) {
      formik.setFieldValue(name, selectedDays || '');
    }
  }

  componentWillUnmount = () => {
    clearTimeout(this.timeout.inputBlur);
    clearTimeout(this.timeout.datePickerBlur);
  }

  makeDate = (dates) => {
    const areDatesValid = dates && !dates.find(
      (date) => !dateFnsIsValid(new Date(date)),
    );

    if (areDatesValid) {
      return dates.map((date) => {
        const clonedDate = new Date(date);
        clonedDate.setHours(12, 0, 0, 0);
        return clonedDate;
      });
    }
    return [];
  }

  onDayClick = (day, modifiers) => {
    const { name, onDateChange, multiple } = this.props;
    const { formik } = this.context;

    if (modifiers.disabled) {
      return;
    }
    this.setState(({ selectedDays }) => {
      let currSelectedDays = null;

      if (multiple && getIn(selectedDays, 'length')) {
        currSelectedDays = [...selectedDays];
        const dayIndex = currSelectedDays.findIndex((d) => DateUtils.isSameDay(d, day));

        if (dayIndex !== -1) {
          currSelectedDays.splice(dayIndex, 1);
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
      onDateChange(multiple ? selectedDays : day, modifiers);
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

  updateSelectedDays = () => {
    const { formik } = this.context;
    const { name } = this.props;

    this.setState({ selectedDays: getIn(formik, `values[${name}]`) });
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
      error,
    } = this.props;

    const {
      formik,
    } = this.context;

    let errorMessage = null;

    if (formik && name) {
      errorMessage = error || (getIn(formik.touched, name) && getIn(formik.errors, name));
      errorMessage = errorMessage && errorMessage.replace(name, label || name);

      if (getIn(formik, `values[${name}]`) !== selectedDays) {
        this.updateSelectedDays();
      }
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
                          month={
                            getIn(selectedDays, 'length')
                              ? selectedDays[selectedDays.length - 1]
                              : null
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
