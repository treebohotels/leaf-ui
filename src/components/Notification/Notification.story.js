import React from 'react';
import { storiesOf } from '@storybook/react';
import Notification from './Notification';

storiesOf('Notification', module)
  .add('simple', () => (
    <Notification
      type="success"
      title="206 Oak upgraded to 205 Mahogany"
      content="The room was successfully upgraded"
      actionProps={{
        onClick: () => {},
        children: 'OKAY',
      }}
    />
  ));
