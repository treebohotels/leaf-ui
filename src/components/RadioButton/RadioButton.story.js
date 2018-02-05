import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from './RadioButton';

storiesOf('RadioButton', module)
  .add('simple', () => (
    <div>
      <RadioButton
        name="leafColor"
        label="Green"
        value="green"
      />
      <RadioButton
        name="leafColor"
        label="Brown"
        value="brown"
      />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <RadioButton
        name="leafColor"
        label="Green"
        value="green"
        disabled
        defaultChecked
      />
      <RadioButton
        name="leafColor"
        label="Brown"
        value="brown"
        disabled
      />
    </div>
  ))
  .add('with error', () => (
    <RadioButton
      name="leafColor"
      label="Brown"
      value="brown"
      error="no they're not"
      defaultChecked
    />
  ));
