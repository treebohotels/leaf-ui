import React from 'react';

export default (storiesOf, { TextInput }) =>
  storiesOf('TextInput', module)
    .add('simple', () => (
      <TextInput
        name="leafColor"
        label="Leaf Color"
      />
    ))
    .add('disabled', () => (
      <TextInput
        name="leafColor"
        label="Leaf Color"
        disabled
      />
    ))
    .add('with error', () => (
      <TextInput
        name="leafColor"
        label="Leaf Color"
        defaultValue="silver"
        error="invalid leaf color"
      />
    ));
