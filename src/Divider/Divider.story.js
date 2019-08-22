import React from 'react';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import theme from '../theme';
import Divider from './Divider';

storiesOf('Divider', module).addParameters({
  component: Divider,
})
  .add('playground', () => (
    <Divider
      color={select('color', Object.keys(theme.color), 'grey')}
      type={select('type', ['solid', 'dashed'], 'solid')}
    />
  ))
  .add('solid', () => (
    <Divider />
  ))
  .add('dashed', () => (
    <Divider type="dashed" />
  ));
