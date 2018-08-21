import React from 'react';

export default (storiesOf, { Checkbox }) =>
  storiesOf('Checkbox', module)
    .add('simple', () => (
      <div style={{ width: '100px' }}>
        <Checkbox
          name="areLeavesGreen"
          truncate
          label="Are leaves green ksrgf ersog esrgfbv ersgibov eiobsrg eiorbv?"
        />
      </div>

    ))
    .add('disabled', () => (
      <Checkbox
        name="areLeavesGreen"
        label="Are leaves green?"
        disabled
        defaultChecked
      />
    ))
    .add('with error', () => (
      <Checkbox
        name="areLeavesMadeOfGlass"
        label="Are leaves made of glass?"
        error="no they're not"
        defaultChecked
      />
    ));
