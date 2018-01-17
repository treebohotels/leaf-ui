import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../../theme';
import Aux from '../Aux';
import Chip from './Chip';

storiesOf('Chip', module)
  .add('playground', () => (
    <Chip color={select('color', Object.keys(theme.color), 'primary')}>
      {text('children', 'Chip')}
    </Chip>
  ))
  .add('simple', () => (
    <Aux>
      <Chip>
        primary
      </Chip>
      <br /><br />
      <Chip color="blue">
        blue
      </Chip>
    </Aux>
  ));
