import React from 'react';

export default (storiesOf, { Notification }) =>
  storiesOf('Notification', module)
    .add('success', () => (
      <Notification
        color="red"
        icon="check_circle"
        title="206 Oak upgraded to 205 Mahogany"
        message="The room was successfully upgraded"
        actions={[{
          label: 'OKAY',
          onClick: () => {},
        }, {
          label: 'COOL',
          onClick: () => {},
        }]}
        onClose={() => {}}
      />
    ));
