import React from 'react';
import { select } from '@storybook/addon-knobs';

export default(storiesOf, { Image }) =>
  storiesOf('Image', module)
    .add('playground', () => (
      <Image
        alt="img-1"
        shape={select('shape', ['bluntEdged', 'sharpEdged', 'circular'], 'bluntEdged')}
        src="https://images.treebohotels.com/files/Treebo_The_Galaxy/Oak/OAk_(4).jpg"
        height="300px"
        width="300px"
      />
    ));
