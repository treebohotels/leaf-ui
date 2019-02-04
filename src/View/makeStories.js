import React from 'react';

const sampleText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas at elit eget diam convallis ultricies in a ligula.
    Nunc rutrum est ut risus laoreet laoreet.
    Donec convallis massa at pretium tincidunt.
    Quisque quis tellus quis odio venenatis bibendum.`;

export default (storiesOf, {
  View,
}) =>
  storiesOf('View', module)
    .add('simple', () => (
      <View>
        {sampleText}
      </View>
    ));
