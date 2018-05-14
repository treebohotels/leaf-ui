import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import theme from '../theme';

const sampleText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.`;

export default(storiesOf, {
  Card,
}) =>
  storiesOf('Card', module)
    .add('playground', () => (
      <Card
        borderColor={select('borderColor', Object.keys(theme.color), 'white')}
        backgroundColor={select('backgroundColor', Object.keys(theme.color), 'white')}
        elevated={boolean('elevated', false)}
      >
        {sampleText}
      </Card>
    ))
    .add('simple', () => (
      <Card>
        {sampleText}
      </Card>
    ))
    .add('elevated', () => (
      <Card elevated>
        {sampleText}
      </Card>
    ));
