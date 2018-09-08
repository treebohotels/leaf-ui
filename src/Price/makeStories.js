import React from 'react';

export default (storiesOf, { Price }) =>
  storiesOf('Price', module)
    .add('simple', () => (
      <Price>
        1234.50 INR
      </Price>
    ))
    .add('rounded', () => (
      <Price rounded>
        1234.50 INR
      </Price>
    ));
