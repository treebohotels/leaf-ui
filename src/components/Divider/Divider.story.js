import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import theme from '../../theme';
import Divider from './Divider';

storiesOf('Divider', module)
  .add('playground', () => (
    <Divider
      color={select('color', Object.keys(theme.color), 'rock')}
      type={select('type', ['solid', 'dashed'], 'solid')}
    />
  ))
  .add('solid', () => (
    <Divider type="solid" />
  ))
  .add('dashed', () => (
    <Divider type="dashed" />
  ));
