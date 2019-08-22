import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Image from './Image';

storiesOf('Image', module).addParameters({
  component: Image,
})
  .add('playground', () => (
    <Image
      alt="img-1"
      shape={select('shape', ['bluntEdged', 'sharpEdged', 'circular'], 'bluntEdged')}
      src="https://images.treebohotels.com/files/Treebo_The_Galaxy/Oak/OAk_(4).jpg"
      height="300px"
      width="300px"
    />
  ));
