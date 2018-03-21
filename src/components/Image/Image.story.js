import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './Image';

storiesOf('Image', module)
  .add('simple', () => (
    <Image
      height="200px"
      width="200px"
      src="http://images.treebohotels.com/files/Treebo_Akshaya_Lalbagh_Inn/Akshaya_Lalbagh_Oak_Queen_03.jpg?w=400&h=300&fm=pjpg&fit=crop&auto=compress"
    />
  ));
