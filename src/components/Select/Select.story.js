import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import theme from '../../theme';
import Select from './Select';

const options = Object.keys(theme.color).map((color) => ({
  label: color,
  value: color,
}));

storiesOf('Select', module)
  .add('single', () => (
    <Select
      name="color"
      label="Color"
      options={options}
      defaultSelected={options[2]}
      onChange={action('onChange')}
    />
  ))
  .add('multiple', () => (
    <Select
      name="color"
      label="Color"
      multiple
      options={options}
      defaultSelected={options[2]}
      onChange={action('onChange')}
    />
  ));
