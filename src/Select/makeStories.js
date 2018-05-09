import React from 'react';
import { action } from '@storybook/addon-actions';
import theme from '../theme';

const options = Object.keys(theme.color).map((color) => ({
  label: color,
  value: color,
}));

export default (storiesOf, { Select }) =>
  storiesOf('Select', module)
    .add('single', () => (
      <Select
        name="color"
        label="Color"
        placeholder="Select a color"
        options={options}
        onChange={action('onChange')}
      />
    ))
    .add('multiple', () => (
      <Select
        name="color"
        label="Color"
        placeholder="Select a color"
        multiple
        options={options}
        defaultSelected={options[2]}
        onChange={action('onChange')}
      />
    ))
    .add('disabled', () => (
      <Select
        name="color"
        label="Color"
        placeholder="Select a color"
        options={options}
        onChange={action('onChange')}
        defaultSelected={options[2]}
        disabled
      />
    ))
    .add('error', () => (
      <Select
        name="color"
        label="Color"
        placeholder="Select a color"
        options={options}
        onChange={action('onChange')}
        error="some error message"
      />
    ));
