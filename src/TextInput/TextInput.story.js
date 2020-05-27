import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';
import Icon from '../Icon';

storiesOf('TextInput', module)
  .addParameters({
    component: TextInput,
  })
  .add('simple', () => <TextInput name="leafColor" label="Leaf Color" required />)
  .add('disabled', () => <TextInput name="leafColor" label="Leaf Color" disabled />)
  .add('with hint', () => (
    <TextInput
      name="leafColor"
      label="Leaf Color"
      placeholder="What's the leaf's  color"
      hint="leaves are usually green"
    />
  ))
  .add('with error', () => (
    <TextInput
      name="leafColor"
      label="Leaf Color"
      defaultValue="silver"
      error="invalid leaf color"
    />
  ))
  .add('with icon', () => (
    <TextInput
      icon={<Icon name="search" />}
      name="leafColor"
      label="Leaf Color"
      placeholder="Input with Icon on left"
    />
  ));
