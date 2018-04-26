import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Icon from '../../Icon/web';
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
      <List.Item onClick={action('listItem clicked')}>Acacia</List.Item>
      <List.Item onClick={action('listItem clicked')}>Oak</List.Item>
      <List.Item onClick={action('listItem clicked')}>Maple</List.Item>
      <List.Item onClick={action('listItem clicked')}>Mahogany</List.Item>
      <List.Item onClick={action('listItem clicked')}>
        <Icon name="nature">
          with Icon
        </Icon>
      </List.Item>
    </List>
  ))
  .add('clickable list with a disabled item', () => (
    <List>
      <List.Item onClick={action('listItem clicked')}>Acacia</List.Item>
      <List.Item onClick={action('listItem clicked')} disabled>Oak</List.Item>
      <List.Item onClick={action('listItem clicked')}>Maple</List.Item>
      <List.Item onClick={action('listItem clicked')}>Mahogany</List.Item>
      <List.Item onClick={action('listItem clicked')} disabled>
        <Icon name="nature">
          with Icon
        </Icon>
      </List.Item>
    </List>
  ));
