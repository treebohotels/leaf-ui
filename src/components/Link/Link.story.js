import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

storiesOf('Link', module)
  .add('simple', () => (
    <Link href="#hash">
      A simple link
    </Link>
  ));
