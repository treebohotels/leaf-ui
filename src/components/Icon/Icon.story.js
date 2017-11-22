import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';
import Icon from './Icon';

storiesOf('Icon', module)
  .add('simple', () => (
    <Icon name="nature" />
  ))
  .add('button', () => (
    <Icon name="nature" button />
  ))
  .add('disabled button', () => (
    <Icon name="nature" button disabled />
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
