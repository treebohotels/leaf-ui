import React from 'react';

export default(storiesOf, {
  DateRangePickerInput,
}) =>
  storiesOf('DateRangePickerInput', module)
    .add('simple', () => (
      <DateRangePickerInput
        name={{ from: 'checkIn', to: 'checkOut' }}
      />
    ));
