import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../../Icon/web';
import Text from '../../Text/web';
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
    <Fragment>
      <Text size="xl">
        Need To Know
      </Text>
      <List bulletType="disc">
        <List.Item>
          12:00 PM Checkin
        </List.Item>
        <List.Item>
          11:00 AM Checkout
        </List.Item>
        <List.Item>
          Late check-out between 12 pm and 1 pm is possible (free of charge) but can be confirmed,
          subject to availability, only at the time of check-out and not in advance.
          For check-out after 1 PM, an extra night&apos;s tariff shall be applicable.
        </List.Item>
        <List.Item>
          A maximum of 1 child upto an age of 8 years and an extra infant upto an age of 2 years
          is allowed free of charge, subject to room occupancy capacity.
          Breakfast will be included in stay but no extra bed or mattress will be provided.
          Extra person charges are applicable for anyone above 8 years of age. Extra person
          charges are also applicable for extra kids during check-in.
        </List.Item>
      </List>
    </Fragment>
  ));
