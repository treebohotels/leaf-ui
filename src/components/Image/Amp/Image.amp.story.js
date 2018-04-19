import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './Image';

storiesOf('Image', module)
  .add('simple', () => (
    <Image
      alt="img-1"
      width="400"
      height="300"
      src="https://images.treebohotels.com/files/Treebo_The_Galaxy/Oak/OAk_(4).jpg"
    />
  ));
