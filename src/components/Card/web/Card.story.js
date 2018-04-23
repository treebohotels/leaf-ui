import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, number } from '@storybook/addon-knobs';
import theme from '../../../theme';
import Card from './Card';

const LoremIpsum = () => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Maecenas at elit eget diam convallis ultricies in a ligula.<br />
    Nunc rutrum est ut risus laoreet laoreet.<br />
    Donec convallis massa at pretium tincidunt.<br />
    Quisque quis tellus quis odio venenatis bibendum.
  </div>
);

storiesOf('Card', module)
  .add('playground', () => (
    <Card
      color={select('color', Object.keys(theme.color), 'white')}
      elevation={number('elevation', 0)}
    >
      <LoremIpsum />
    </Card>
  ))
  .add('simple', () => (
    <Card>
      <LoremIpsum />
    </Card>
  ))
  .add('with elevation', () => (
    <Card elevation={2}>
      <LoremIpsum />
    </Card>
  ));
