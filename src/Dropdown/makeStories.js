import React from 'react';
import { action } from '@storybook/addon-actions';

export default(storiesOf, {
  Dropdown,
  Icon,
  List,
  Button,
}) =>
  storiesOf('Dropdown', module)
    .add('simple', () => (
      <Dropdown>
        <Dropdown.Trigger>
          <Button>Tree Type</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <List>
            <List.Item onClick={action('Acacia')}>Acacia</List.Item>
            <List.Item onClick={action('Oak')}>Oak</List.Item>
            <List.Item onClick={action('Maple')}>Maple</List.Item>
            <List.Item onClick={action('Mahogany')}>Mahogany</List.Item>
            <List.Item onClick={action('Nature')}>
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
            <List.Item onClick={action('Acacia')}>Acacia</List.Item>
            <List.Item disabled onClick={action('Oak')}>Oak</List.Item>
            <List.Item onClick={action('Maple')}>Maple</List.Item>
            <List.Item onClick={action('Mahogany')}>Mahogany</List.Item>
            <List.Item disabled onClick={action('Nature')}>
              <Icon name="nature">
              with Icon
              </Icon>
            </List.Item>
          </List>
        </Dropdown.Content>
      </Dropdown>
    ));
