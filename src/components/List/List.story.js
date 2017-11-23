import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../Icon';
import List from './List';

storiesOf('List', module)
  .add('default', () => (
    <List>
      <List.Item>Acacia</List.Item>
      <List.Item>Oak</List.Item>
      <List.Item>Maple</List.Item>
      <List.Item>Mahogany</List.Item>
    </List>
  ))
  .add('clickable list', () => (
    <List>
      <List.Item button>Acacia</List.Item>
      <List.Item button>Oak</List.Item>
      <List.Item button>Maple</List.Item>
      <List.Item button>Mahogany</List.Item>
      <List.Item button>
        <Icon name="nature">
          with Icon
        </Icon>
      </List.Item>
    </List>
  ))
  .add('clickable list with a disabled item', () => (
    <List>
      <List.Item button>Acacia</List.Item>
      <List.Item button disabled>Oak</List.Item>
      <List.Item button>Maple</List.Item>
      <List.Item button>Mahogany</List.Item>
      <List.Item button disabled>
        <Icon name="nature">
          with Icon
        </Icon>
      </List.Item>
    </List>
  ));
