import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

storiesOf('Link', module).addParameters({
  component: Link,
})
  .add('simple', () => (
    <Link href="#hash">
        A simple link
    </Link>
  ))
  .add('colored', () => (
    <Link color="red" href="#hash">
        A colored link
    </Link>
  ));
