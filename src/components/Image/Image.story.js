import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Image from './Image';

storiesOf('Image', module)
  .add('playground', () => (
    <Image
      shape={select('shape', ['bluntEdged', 'sharpEdged', 'circular'], 'bluntEdged')}
      src="https://images.treebohotels.com/files/Treebo_The_Galaxy/Oak/OAk_(4).jpg"
      height="200px"
      width="200px"
    />
  ))
  .add('simple', () => (
    <div>
      <Image
        height="200px"
        width="200px"
        src="https://images.treebohotels.com/files/Treebo_The_Galaxy/Oak/OAk_(4).jpg"
      />
    </div>
  ));
