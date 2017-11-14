import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../theme';
import Aux from '../Aux';
import Chip from './Chip';

const colorsWithLightVariant = Object.keys(theme.color)
  .filter((color) => theme.color[`${color}Light`]);

storiesOf('Chip', module)
  .add('playground', () => (
    <Chip color={select('color', colorsWithLightVariant, 'success')}>
      {text('children', 'Chip')}
    </Chip>
  ))
  .add('colors', () => (
    <Aux>
      {
        colorsWithLightVariant.map((color) => (
          <Aux>
            <Chip color={color}>
              {color}
            </Chip>
            <br /><br />
          </Aux>
        ))
      }
    </Aux>
  ));
