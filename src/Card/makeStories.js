import React from 'react';
import { select, number } from '@storybook/addon-knobs';
import theme from '../theme';

const sampleText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.`;

export default(storiesOf, { Card }) =>
  storiesOf('Card', module)
    .add('playground', () => (
      <Card
        color={select('color', Object.keys(theme.color), 'white')}
        elevation={number('elevation', 0)}
      >
        {sampleText}
      </Card>
    ))
    .add('simple', () => (
      <Card>
        {sampleText}
      </Card>
    ))
    .add('with elevation', () => (
      <Card elevation={2}>
        {sampleText}
      </Card>
    ));
