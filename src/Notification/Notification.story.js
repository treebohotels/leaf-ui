import React from 'react';
import { storiesOf } from '@storybook/react';
import Notification from './Notification';

storiesOf('Notification', module).addParameters({
  component: Notification,
})
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
