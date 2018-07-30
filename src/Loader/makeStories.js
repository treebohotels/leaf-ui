import React from 'react';

export default (storiesOf, {
  Loader,
}) =>
  storiesOf('Loader', module)
    .add('default', () => (
      <Loader />
    ));
