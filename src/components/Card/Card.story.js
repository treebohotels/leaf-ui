import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, number } from '@storybook/addon-knobs';
import theme from '../../theme';
import Card from './Card';

storiesOf('Card', module)
  .add('playground', () => (
    <Card
      style={{ width: '120px', height: '120px' }}
      backgroundColor={select('backgroundColor', Object.keys(theme.color), 'white')}
      elevation={number('elevation', 0)}
    >
      Card content
    </Card>
  ));
