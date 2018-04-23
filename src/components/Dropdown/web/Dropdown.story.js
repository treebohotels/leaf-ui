import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../../Button/web';
import List from '../../List/web';
import Icon from '../../Icon/web';
import Dropdown from './Dropdown';

storiesOf('Dropdown', module)
  .add('simple', () => (
    <Dropdown>
      <Dropdown.Trigger>
        <Button>Tree Type</Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <List>
          <List.Item clickable onClick={action('Acacia')}>Acacia</List.Item>
          <List.Item clickable onClick={action('Oak')}>Oak</List.Item>
          <List.Item clickable onClick={action('Maple')}>Maple</List.Item>
          <List.Item clickable onClick={action('Mahogany')}>Mahogany</List.Item>
          <List.Item clickable onClick={action('Nature')}>
            <Icon name="nature">
              with Icon
            </Icon>
          </List.Item>
        </List>
      </Dropdown.Content>
    </Dropdown>
  ))
  .add('with disabled items', () => (
    <Dropdown>
      <Dropdown.Trigger>
        <Button>Tree Type</Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <List>
          <List.Item clickable onClick={action('Acacia')}>Acacia</List.Item>
          <List.Item clickable disabled onClick={action('Oak')}>Oak</List.Item>
          <List.Item clickable onClick={action('Maple')}>Maple</List.Item>
          <List.Item clickable onClick={action('Mahogany')}>Mahogany</List.Item>
          <List.Item clickable disabled onClick={action('Nature')}>
            <Icon name="nature">
              with Icon
            </Icon>
          </List.Item>
        </List>
      </Dropdown.Content>
    </Dropdown>
  ));
