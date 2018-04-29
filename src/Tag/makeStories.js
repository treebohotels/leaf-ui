import React, { Fragment } from 'react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../theme';

export default (storiesOf, { Tag }) =>
  storiesOf('Tag', module)
    .add('playground', () => (
      <Tag
        color={select('color', Object.keys(theme.color), 'primary')}
        kind={select('kind', ['filled', 'outlined'], 'filled')}
        shape={select('shape', ['bluntEdged', 'sharpEdged', 'capsular'], 'bluntEdged')}
        size={select('size', ['small', 'medium'], 'medium')}
      >
        {text('children', 'Tag')}
      </Tag>
    ))
    .add('kinds', () => (
      <Fragment>
        <Tag kind="outlined">
        outlined
        </Tag>
        <br /><br />
        <Tag kind="filled">
        filled
        </Tag>
      </Fragment>
    ))
    .add('size', () => (
      <Fragment>
        <Tag size="small">
        small
        </Tag>
        <br /><br />
        <Tag>
        medium
        </Tag>
      </Fragment>
    ));
