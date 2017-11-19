import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../../theme';
import Aux from '../Aux';
import Chip from './Chip';

storiesOf('Chip', module)
  .add('playground', () => (
    <Chip color={select('color', Object.keys(theme.color), 'leaf')}>
      {text('children', 'Chip')}
    </Chip>
  ))
  .add('simple', () => (
    <Aux>
      <Chip>
        leaf
      </Chip>
      <br /><br />
      <Chip color="royal">
        royal
      </Chip>
    </Aux>
  ));
