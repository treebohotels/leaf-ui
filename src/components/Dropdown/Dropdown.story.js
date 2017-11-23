import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import List from '../List';
import Icon from '../Icon';
import Dropdown from './Dropdown';

storiesOf('Dropdown', module)
  .add('simple', () => (
    <Dropdown>
      <Dropdown.Trigger>
        <Button>Tree Type</Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <List>
          <List.Item button onClick={action('Acacia')}>Acacia</List.Item>
          <List.Item button onClick={action('Oak')}>Oak</List.Item>
          <List.Item button onClick={action('Maple')}>Maple</List.Item>
          <List.Item button onClick={action('Mahogany')}>Mahogany</List.Item>
          <List.Item button onClick={action('Nature')}>
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
          <List.Item button onClick={action('Acacia')}>Acacia</List.Item>
          <List.Item button disabled onClick={action('Oak')}>Oak</List.Item>
          <List.Item button onClick={action('Maple')}>Maple</List.Item>
          <List.Item button onClick={action('Mahogany')}>Mahogany</List.Item>
          <List.Item button disabled onClick={action('Nature')}>
            <Icon name="nature">
              with Icon
            </Icon>
          </List.Item>
        </List>
      </Dropdown.Content>
    </Dropdown>
  ));
