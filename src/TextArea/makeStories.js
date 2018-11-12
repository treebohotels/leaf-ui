import React from 'react';

export default (storiesOf, { TextArea }) =>
  storiesOf('TextArea', module)
    .add('simple', () => (
      <TextArea
        name="leafColor"
        label="Leaf Color"
      />
    ))
    .add('disabled', () => (
      <TextArea
        name="leafColor"
        label="Leaf Color"
        disabled
      />
    ))
    .add('with hint', () => (
      <TextArea
        name="leafColor"
        label="Leaf Color"
        defaultValue="silver"
        hint="leaves are usually green"
      />
    ))
    .add('with error', () => (
      <TextArea
        name="leafColor"
        label="Leaf Color"
        defaultValue="silver"
        error="invalid leaf color"
      />
    ));
