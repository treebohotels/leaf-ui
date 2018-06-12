import React from 'react';

export default(storiesOf, {
  DatePickerInput,
}) =>
  storiesOf('DatePickerInput', module)
    .add('simple', () => (
      <DatePickerInput
        name="dob"
      />
    ));
