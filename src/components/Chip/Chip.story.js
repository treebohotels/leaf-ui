import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../../theme';
import Chip from './Chip';

storiesOf('Chip', module)
  .add('playground', () => (
    <Chip color={select('color', Object.keys(theme.color), 'leaf')}>
      {text('children', 'Chip')}
    </Chip>
  ));
