import React from 'react';

export default (storiesOf, {
  Loader,
}) =>
  storiesOf('Loader', module)
    .add('small', () => (
      <Loader size="small" />
    ))
    .add('large', () => (
      <Loader />
    ));
