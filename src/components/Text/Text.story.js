import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../../theme';
import Aux from '../Aux';
import Text from './Text';

storiesOf('Text', module)
  .add('playground', () => (
    <Text
      color={select('color', Object.keys(theme.color), 'black')}
      size={select('size', Object.keys(theme.fontSize), 's')}
      weight={select('weight', Object.keys(theme.fontWeight), 'normal')}
      family={select('family', Object.keys(theme.fontFamily), 'roboto')}
    >
      {text('children', 'The quick brown fox jumps over the lazy dog')}
    </Text>
  ))
  .add('sizes', () => (
    <Aux>
      {
        Object.keys(theme.fontSize).map((size) => (
          <Text size={size}>
            {size}: {theme.fontSize[size]}<br />
            The quick brown fox jumps over the lazy dog
          </Text>
        ))
      }
    </Aux>
  ))
  .add('weights', () => (
    <Aux>
      {
        Object.keys(theme.fontWeight).map((weight) => (
          <Text weight={weight}>
            {weight}: {theme.fontWeight[weight]}<br />
            The quick brown fox jumps over the lazy dog
          </Text>
        ))
      }
    </Aux>
  ))
  .add('families', () => (
    <Aux>
      {
        Object.keys(theme.fontFamily).map((family) => (
          <Text family={family}>
            {family}<br />
            The quick brown fox jumps over the lazy dog
          </Text>
        ))
      }
    </Aux>
  ));
