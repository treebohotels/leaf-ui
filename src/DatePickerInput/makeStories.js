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
    .add('all dates', () => (
      <DatePickerInput
        name="dob"
        disabledDays={[]}
      />
    ))
    .add('weekdays', () => (
      <DatePickerInput
        name="workday"
        disabledDays={[{ daysOfWeek: [0, 6] }]}
      />
    ));
