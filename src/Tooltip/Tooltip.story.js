import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';
import Tooltip from './Tooltip';

storiesOf('Tooltip', module).addParameters({
  component: Tooltip,
}).addParameters({
  component: Tooltip,
})
  .add('simple', () => (
    <Tooltip placement="right">
      <Tooltip.Trigger>
        <Button>Oak</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        This is a tree type
      </Tooltip.Content>
    </Tooltip>
  ));
