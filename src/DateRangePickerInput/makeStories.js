import React from 'react';

export default(storiesOf, {
  DateRangePickerInput,
}) =>
  storiesOf('DateRangePickerInput', module)
    .add('simple', () => (
      <DateRangePickerInput
        name={{ from: 'checkIn', to: 'checkOut' }}
      />
    ))
    .add('all dates', () => (
      <DateRangePickerInput
        name={{ from: 'checkIn', to: 'checkOut' }}
        disabledDays={[]}
      />
    ))
    .add('weekdays', () => (
      <DateRangePickerInput
        name={{ from: 'TGIM', to: 'TGIF' }}
        disabledDays={[{ daysOfWeek: [0, 6] }]}
      />
    ));
