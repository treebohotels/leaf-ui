import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateRangePickerInput from './DateRangePickerInput';

storiesOf('DateRangePickerInput', module).addParameters({
  component: DateRangePickerInput,
})
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
  .add('same day', () => (
    <DateRangePickerInput
      name={{ from: 'TGIM', to: 'TGIF' }}
      disabledDays={[{ daysOfWeek: [0, 6] }]}
      minRange={0}
      onDateRangeChange={action('onDateRangeChange')}
      onFromDateChange={action('onFromDateChange')}
      onToDateChange={action('onToDateChange')}
    />
  ));
