import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

storiesOf('TextInput', module)
  .add('simple', () => (
    <TextInput
      name="leafColor"
      label="Leaf Color"
    />
  ))
  .add('with error', () => (
    <TextInput
      name="leafColor"
      label="Leaf Color"
      defaultValue="silver"
      error="invalid leaf color"
    />
  ));
