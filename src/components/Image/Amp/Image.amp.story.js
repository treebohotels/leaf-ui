import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './Image';

storiesOf('Image', module)
  .add('simple', () => (
    <div>
      <Image
        alt="img-1"
        width="500px"
        height="300px"
        src="https://images.treebohotels.com/files/Treebo_The_Galaxy/Oak/OAk_(4).jpg"
      />
    </div>
  ));
