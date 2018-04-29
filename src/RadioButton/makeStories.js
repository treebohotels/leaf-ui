import React, { Fragment } from 'react';

export default (storiesOf, { RadioButton }) =>
  storiesOf('RadioButton', module)
    .add('simple', () => (
      <Fragment>
        <RadioButton
          name="leafColor"
          label="Green"
          value="green"
        />
        <RadioButton
          name="leafColor"
          label="Brown"
          value="brown"
        />
      </Fragment>
    ))
    .add('disabled', () => (
      <Fragment>
        <RadioButton
          name="leafColor"
          label="Green"
          value="green"
          disabled
          defaultChecked
        />
        <RadioButton
          name="leafColor"
          label="Brown"
          value="brown"
          disabled
        />
      </Fragment>
    ))
    .add('with error', () => (
      <RadioButton
        name="leafColor"
        label="Brown"
        value="brown"
        error="no they're not"
        defaultChecked
      />
    ));
