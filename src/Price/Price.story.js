import React from 'react';
import { storiesOf } from '@storybook/react';
import Price from './Price';

storiesOf('Price', module).addParameters({
  component: Price,
})
  .add('simple', () => (
    <Price>
        1234.50 INR
    </Price>
  ))
  .add('rounded', () => (
    <Price rounded>
        1234.50 INR
    </Price>
  ));
