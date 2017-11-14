import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import theme from '../theme';
import Aux from '../Aux';
import Button from './Button';

const colors = Object.keys(theme.color);

storiesOf('Button', module)
  .add('playground', () => (
    <Button
      color={select('color', colors, 'leaf')}
      size={select('size', ['small', 'default', 'large'], 'default')}
      flat={boolean('flat', false)}
      full={boolean('full', false)}
      transparent={boolean('transparent', false)}
      border={boolean('border', false)}
      disabled={boolean('disabled', false)}
      onClick={action('button clicked')}
    >
      {text('children', 'Button')}
    </Button>
  ))
  .add('colors', () => (
    <Aux>
      {
        colors.map((color) => (
          <Aux>
            <Button color={color}>
              {color}
            </Button>
            <br /><br />
          </Aux>
        ))
      }
    </Aux>
  ))
  .add('sizes', () => (
    <Aux>
      <Button size="small">
        Small
      </Button>
      <br /><br />
      <Button size="default">
        Default
      </Button>
      <br /><br />
      <Button size="large">
        Large
      </Button>
    </Aux>
  ))
  .add('transparent', () => (
    <Button transparent>
      Transparent
    </Button>
  ))
  .add('transparent, with border', () => (
    <Button transparent border>
      Transparent with border
    </Button>
  ))
  .add('flat, no rounded corners', () => (
    <Button flat>
      Flat
    </Button>
  ))
  .add('full width', () => (
    <Button full>
      Full
    </Button>
  ));
