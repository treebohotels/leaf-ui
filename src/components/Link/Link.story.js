import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

storiesOf('Link', module)
  .add('simple', () => (
    <Link href="#hashId">
      A simple link
    </Link>
  ));
