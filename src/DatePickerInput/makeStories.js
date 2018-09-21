import React from 'react';

export default(storiesOf, {
  DatePickerInput,
}) =>
  storiesOf('DatePickerInput', module)
    .add('simple', () => (
      <DatePickerInput
        name="dob"
      />
    ))
    .add('block', () => (
      <DatePickerInput
        name="dob"
        block
      />
    ))
    .add('multiple', () => (
      <DatePickerInput
        name="dob"
        multiple
        block
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
