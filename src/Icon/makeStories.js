import React from 'react';
import { action } from '@storybook/addon-actions';

export default (storiesOf, {
  Button,
  Icon,
}) =>
  storiesOf('Icon', module)
    .add('simple', () => (
      <Icon name="nature" />
    ))
    .add('clickable', () => (
      <Icon
        name="nature"
        onClick={action('icon clicked')}
      />
    ))
    .add('disabled', () => (
      <Icon
        name="nature"
        onClick={action('icon clicked')}
        disabled
      />
    ))
    .add('inside a Button', () => (
      <Button>
        <Icon name="nature">
        Nature
        </Icon>
      </Button>
    ))
    .add('inside a Button to the right', () => (
      <Button>
        <Icon name="nature" right>
        Nature
        </Icon>
      </Button>
    ));
