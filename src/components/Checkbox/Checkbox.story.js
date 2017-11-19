import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .add('simple', () => (
    <Checkbox
      name="areLeavesGreen"
      label="Are leaves green?"
      onChange={action('onChange')}
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
