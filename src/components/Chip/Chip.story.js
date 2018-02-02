import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../../theme';
import Aux from '../Aux';
import Chip from './Chip';

storiesOf('Chip', module)
  .add('playground', () => (
    <Chip
      color={select('color', Object.keys(theme.color), 'primary')}
      kind={select('kind', ['solid', 'outlined'], 'outlined')}
      size={select('size', ['small', 'regular'], 'regular')}
    >
      {text('children', 'Chip')}
    </Chip>
  ))
  .add('kinds', () => (
    <Aux>
      <Chip>
        outlined
      </Chip>
      <br /><br />
      <Chip kind="solid">
        solid
      </Chip>
    </Aux>
  ))
  .add('size', () => (
    <Aux>
      <Chip>
        regular
      </Chip>
      <br /><br />
      <Chip size="small">
        small
      </Chip>
    </Aux>
  ));
