import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import theme from '../../theme';
import Button from './Button';

storiesOf('Button', module)
  .add('playground', () => (
    <Button
      color={select('color', Object.keys(theme.color), 'primary')}
      kind={select('kind', ['solid', 'outlined', 'transparent'], 'solid')}
      shape={select('shape', ['default', 'flat', 'rounded', 'circular'], 'default')}
      size={select('size', ['small', 'regular', 'large'], 'regular')}
      block={boolean('block', false)}
      disabled={boolean('disabled', false)}
      onClick={action('button clicked')}
    >
      {text('children', 'Default Button')}
    </Button>
  ))
  .add('kinds', () => (
    <div>
      <Button kind="solid">
        Solid Button
      </Button>
      <br /><br />
      <Button kind="outlined">
        Outlined Button
      </Button>
      <br /><br />
      <Button kind="transparent">
        Transparent Button
      </Button>
    </div>
  ))
  .add('shapes', () => (
    <div>
      <Button shape="default">
        Default Button
      </Button>
      <br /><br />
      <Button shape="flat">
        Flat Button
      </Button>
      <br /><br />
      <Button shape="rounded">
        Rounded Button
      </Button>
      <br /><br />
      <Button shape="circular">
        CB
      </Button>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <Button size="small">
        Small Button
      </Button>
      <br /><br />
      <Button size="regular">
        Default Button
      </Button>
      <br /><br />
      <Button size="large">
        Large Button
      </Button>
    </div>
  ))
  .add('block', () => (
    <Button block>
      Block Button
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled>
      Disabled Button
    </Button>
  ));
