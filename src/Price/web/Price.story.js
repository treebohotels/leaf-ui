import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import Price from './Price';

storiesOf('Price', module)
  .add('playground', () => (
    <Price rounded={boolean('rounded', true)}>
      {number('children', 1234.50)}
    </Price>
  ))
  .add('rounded', () => (
    <Price>
      1234.50
    </Price>
  ))
  .add('floating', () => (
    <Price rounded={false}>
      1234.50
    </Price>
  ));
