import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from './TextArea';

storiesOf('TextArea', module).addParameters({
  component: TextArea,
})
  .add('simple', () => (
    <TextArea
      name="leafColor"
      label="Leaf Color"
      required
    />
  ))
  .add('disabled', () => (
    <TextArea
      name="leafColor"
      label="Leaf Color"
      disabled
    />
  ))
  .add('with hint', () => (
    <TextArea
      name="leafColor"
      label="Leaf Color"
      defaultValue="silver"
      hint="leaves are usually green"
    />
  ))
  .add('with error', () => (
    <TextArea
      name="leafColor"
      label="Leaf Color"
      defaultValue="silver"
      error="invalid leaf color"
    />
  ));
