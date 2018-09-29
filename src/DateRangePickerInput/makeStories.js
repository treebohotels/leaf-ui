import React from 'react';
import { action } from '@storybook/addon-actions';

export default(storiesOf, {
  DateRangePickerInput,
}) =>
  storiesOf('DateRangePickerInput', module)
    .add('simple', () => (
      <DateRangePickerInput
        name={{ from: 'checkIn', to: 'checkOut' }}
        onDateRangeChange={action('onDateRangeChange')}
        onFromDateChange={action('onFromDateChange')}
        onToDateChange={action('onToDateChange')}
      />
    ))
    .add('before today', () => (
      <DateRangePickerInput
        name="dob"
        disabledDays={[{ before: new Date() }]}
        onDateRangeChange={action('onDateRangeChange')}
        onFromDateChange={action('onFromDateChange')}
        onToDateChange={action('onToDateChange')}
      />
    ))
    .add('weekdays', () => (
      <DateRangePickerInput
        name={{ from: 'TGIM', to: 'TGIF' }}
        disabledDays={[{ daysOfWeek: [0, 6] }]}
        onDateRangeChange={action('onDateRangeChange')}
        onFromDateChange={action('onFromDateChange')}
        onToDateChange={action('onToDateChange')}
      />
    ));
