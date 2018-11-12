import React from 'react';

export default (storiesOf, { Link }) =>
  storiesOf('Link', module)
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
