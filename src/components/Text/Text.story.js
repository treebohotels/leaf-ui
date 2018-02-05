import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../../theme';
import Text from './Text';

storiesOf('Text', module)
  .add('playground', () => (
    <Text
      color={select('color', Object.keys(theme.color), 'greyDarker')}
      size={select('size', Object.keys(theme.fontSize), 's')}
      weight={select('weight', Object.keys(theme.fontWeight), 'normal')}
      family={select('family', Object.keys(theme.fontFamily), 'roboto')}
    >
      {text('children', 'The quick brown fox jumps over the lazy dog')}
    </Text>
  ))
  .add('sizes', () => (
    <div>
      {
        Object.keys(theme.fontSize).map((size) => (
          <Text size={size}>
            {size}: {theme.fontSize[size]}<br />
            The quick brown fox jumps over the lazy dog
          </Text>
        ))
      }
    </div>
  ))
  .add('weights', () => (
    <div>
      {
        Object.keys(theme.fontWeight).map((weight) => (
          <Text weight={weight}>
            {weight}: {theme.fontWeight[weight]}<br />
            The quick brown fox jumps over the lazy dog
          </Text>
        ))
      }
    </div>
  ))
  .add('families', () => (
    <div>
      {
        Object.keys(theme.fontFamily).map((family) => (
          <Text family={family}>
            {family}<br />
            The quick brown fox jumps over the lazy dog
          </Text>
        ))
      }
    </div>
  ));
