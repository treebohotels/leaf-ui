import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from './Tabs';

storiesOf('Tabs', module).addParameters({
  component: Tabs,
}).addParameters({
  component: Tabs,
})
  .add('simple', () => (
    <Tabs>
      <Tabs.Tab title="One">
        Content for One
      </Tabs.Tab>
      <Tabs.Tab title="Two">
        Content for Two
      </Tabs.Tab>
    </Tabs>
  ));
