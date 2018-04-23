import React from 'react';
import { storiesOf } from '@storybook/react';
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
      <List.Item clickable>Acacia</List.Item>
      <List.Item clickable>Oak</List.Item>
      <List.Item clickable>Maple</List.Item>
      <List.Item clickable>Mahogany</List.Item>
      <List.Item clickable>
        <Icon name="nature">
          with Icon
        </Icon>
      </List.Item>
    </List>
  ))
  .add('clickable list with a disabled item', () => (
    <List>
      <List.Item clickable>Acacia</List.Item>
      <List.Item clickable disabled>Oak</List.Item>
      <List.Item clickable>Maple</List.Item>
      <List.Item clickable>Mahogany</List.Item>
      <List.Item clickable disabled>
        <Icon name="nature">
          with Icon
        </Icon>
      </List.Item>
    </List>
  ))
  .add('list with bullet', () => (
    <List bulletType="disc">
      <List.Item>Acacia</List.Item>
      <List.Item>Oak</List.Item>
      <List.Item>Maple</List.Item>
      <List.Item>Mahogany</List.Item>
    </List>
  ));
