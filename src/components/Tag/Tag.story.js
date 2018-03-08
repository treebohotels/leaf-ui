import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../../theme';
import Tag from './Tag';

storiesOf('Tag', module)
  .add('playground', () => (
    <Tag
      color={select('color', Object.keys(theme.color), 'primary')}
      kind={select('kind', ['filled', 'outlined'], 'outlined')}
      size={select('size', ['small', 'medium'], 'medium')}
    >
      {text('children', 'Tag')}
    </Tag>
  ))
  .add('kinds', () => (
    <div>
      <Tag>
        outlined
      </Tag>
      <br /><br />
      <Tag kind="filled">
        filled
      </Tag>
    </div>
  ))
  .add('size', () => (
    <div>
      <Tag size="small">
        small
      </Tag>
      <br /><br />
      <Tag>
        medium
      </Tag>
    </div>
  ));
