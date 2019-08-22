import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Text from '../Text';
import Icon from '../Icon';
import List from './List';

storiesOf('List', module).addParameters({
  component: List,
})
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
        <Icon name="nature">with Icon</Icon>
      </List.Item>
    </List>
  ))
  .add('clickable list with a disabled item', () => (
    <List>
      <List.Item onClick={action('listItem clicked')}>Acacia</List.Item>
      <List.Item onClick={action('listItem clicked')} disabled>
          Oak
      </List.Item>
      <List.Item onClick={action('listItem clicked')}>Maple</List.Item>
      <List.Item onClick={action('listItem clicked')}>Mahogany</List.Item>
      <List.Item onClick={action('listItem clicked')} disabled>
        <Icon name="nature">with Icon</Icon>
      </List.Item>
    </List>
  ))
  .add('ordered list', () => (
    <React.Fragment>
      <Text size="xl">Need To Know</Text>
      <List type="ordered">
        <List.Item>12:00 PM Checkin</List.Item>
        <List.Item>11:00 AM Checkout</List.Item>
        <List.Item>
            Late check-out between 12 pm and 1 pm is possible (free of charge) but can be confirmed,
            subject to availability, only at the time of check-out and not in advance. For check-out
            after 1 PM, an extra night&apos;s tariff shall be applicable.
        </List.Item>
        <List.Item>
            A maximum of 1 child upto an age of 8 years and an extra infant upto an age of 2 years
            is allowed free of charge, subject to room occupancy capacity. Breakfast will be
            included in stay but no extra bed or mattress will be provided. Extra person charges are
            applicable for anyone above 8 years of age. Extra person charges are also applicable for
            extra kids during check-in.
        </List.Item>
      </List>
    </React.Fragment>
  ))
  .add('unordered list', () => (
    <React.Fragment>
      <Text size="xl">Need To Know</Text>
      <List type="unordered">
        <List.Item>12:00 PM Checkin</List.Item>
        <List.Item>11:00 AM Checkout</List.Item>
        <List.Item>
            Late check-out between 12 pm and 1 pm is possible (free of charge) but can be confirmed,
            subject to availability, only at the time of check-out and not in advance. For check-out
            after 1 PM, an extra night&apos;s tariff shall be applicable.
        </List.Item>
        <List.Item>
            A maximum of 1 child upto an age of 8 years and an extra infant upto an age of 2 years
            is allowed free of charge, subject to room occupancy capacity. Breakfast will be
            included in stay but no extra bed or mattress will be provided. Extra person charges are
            applicable for anyone above 8 years of age. Extra person charges are also applicable for
            extra kids during check-in.
        </List.Item>
      </List>
    </React.Fragment>
  ));
