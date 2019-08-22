import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module).addParameters({
  component: Checkbox,
})
  .add('simple', () => (
    <Checkbox
      name="areLeavesGreen"
      label="Are leaves green?"
      required
    />
  ))
  .add('disabled', () => (
    <Checkbox
      name="areLeavesGreen"
      label="Are leaves green?"
      disabled
      defaultChecked
    />
  ))
  .add('with hint', () => (
    <Checkbox
      name="areLeavesMadeOfGlass"
      label="Are leaves made of glass?"
      hint="they're green in color"
      defaultChecked
    />
  ))
  .add('with error', () => (
    <Checkbox
      name="areLeavesMadeOfGlass"
      label="Are leaves made of glass?"
      error="no they're not"
      defaultChecked
    />
  ));
