import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Image from './Image';

storiesOf('Image', module)
  .add('playground', () => (
    <Image
      shape={select('shape', ['bluntEdged', 'sharpEdged', 'capsular', 'circular'], 'bluntEdged')}
      src="http://images.treebohotels.com/files/Treebo_The_Galaxy/Oak/OAk_(4).jpg?w=400&h=300&fm=pjpg&fit=crop&auto=compress"
      height="200px"
      width="200px"
    />
  ))
  .add('simple', () => (
    <div>
      <Image
        height="200px"
        width="200px"
        src="http://images.treebohotels.com/files/Treebo_The_Galaxy/Oak/OAk_(4).jpg?w=400&h=300&fm=pjpg&fit=crop&auto=compress"
      />
    </div>
  ));
