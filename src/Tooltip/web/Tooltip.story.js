import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../Button/web';
import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
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
