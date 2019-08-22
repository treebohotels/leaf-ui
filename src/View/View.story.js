import React from 'react';
import { storiesOf } from '@storybook/react';
import View from './View';

const sampleText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.`;

storiesOf('View', module).addParameters({
  component: View,
})
  .add('simple', () => (
    <View>
      {sampleText}
    </View>
  ));
