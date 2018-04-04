import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import theme from '../../theme';
import Text from './Text';

storiesOf('Text', module)
  .add('playground', () => (
    <Text
      component={text('component', 'div')}
      color={select('color', Object.keys(theme.color), 'greyDarker')}
      size={select('size', Object.keys(theme.fontSize), 's')}
      weight={select('weight', Object.keys(theme.fontWeight), 'normal')}
      family={select('family', Object.keys(theme.fontFamily), 'roboto')}
      align={select('align', ['left', 'center', 'right'], 'left')}
      trucate={boolean('trucate', false)}
    >
      {text('children', 'The quick brown fox jumps over the lazy dog')}
    </Text>
  ));
