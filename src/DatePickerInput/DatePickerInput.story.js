import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePickerInput from './DatePickerInput';

storiesOf('DatePickerInput', module).addParameters({
  component: DatePickerInput,
})
  .add('simple', () => (
    <DatePickerInput
      name="dob"
      label="DOB"
      required
    />
  ))
  .add('before today', () => (
    <DatePickerInput
      name="dob"
      disabledDays={[{ before: new Date() }]}
    />
  ))
  .add('weekdays', () => (
    <DatePickerInput
      name="workday"
      disabledDays={[{ daysOfWeek: [0, 6] }]}
    />
  ));
