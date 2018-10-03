import React from 'react';
import { select } from '@storybook/addon-knobs';
import theme from '../theme/web';

export default (storiesOf, { Divider }) =>
  storiesOf('Divider', module)
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
