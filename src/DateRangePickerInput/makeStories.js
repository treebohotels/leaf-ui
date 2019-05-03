import React from 'react';
import { action } from '@storybook/addon-actions';

export default (storiesOf, {
  DateRangePickerInput,
}) =>
  storiesOf('DateRangePickerInput', module)
    .add('simple', () => (
      <DateRangePickerInput
        name={{ from: 'checkIn', to: 'checkOut' }}
        label={{ from: 'Check-In', to: 'Check-Out' }}
        required={{ from: true, to: true }}
        onDateRangeChange={action('onDateRangeChange')}
        onFromDateChange={action('onFromDateChange')}
        onToDateChange={action('onToDateChange')}
      />
    ))
    .add('before today', () => (
      <DateRangePickerInput
        name={{ from: 'checkIn', to: 'checkOut' }}
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
    ))
    .add('min range 0', () => (
      <DateRangePickerInput
        name={{ from: 'TGIM', to: 'TGIF' }}
        disabledDays={[{ daysOfWeek: [0, 6] }]}
        minRange={0}
        onDateRangeChange={action('onDateRangeChange')}
        onFromDateChange={action('onFromDateChange')}
        onToDateChange={action('onToDateChange')}
      />
    ))
    .add('max range 5', () => (
      <DateRangePickerInput
        name={{ from: 'TGIM', to: 'TGIF' }}
        disabledDays={[{ daysOfWeek: [0, 6] }]}
        maxRange={5}
        onDateRangeChange={action('onDateRangeChange')}
        onFromDateChange={action('onFromDateChange')}
        onToDateChange={action('onToDateChange')}
      />
    ));
