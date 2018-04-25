import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import theme from '../../../theme';
import Button from './Button';

storiesOf('Button', module)
  .add('playground', () => (
    <Button
      color={select('color', Object.keys(theme.color), 'primary')}
      kind={select('kind', ['filled', 'outlined'], 'filled')}
      shape={select('shape', ['bluntEdged', 'sharpEdged', 'capsular', 'circular'], 'bluntEdged')}
      size={select('size', ['small', 'medium', 'large'], 'medium')}
      block={boolean('block', false)}
      disabled={boolean('disabled', false)}
      onClick={action('button clicked')}
    >
      {text('children', 'Button')}
    </Button>
  ))
  .add('kinds', () => (
    <div>
      <Button kind="filled">
        Filled Button
      </Button>
      <br /><br />
      <Button kind="outlined">
        Outlined Button
      </Button>
    </div>
  ))
  .add('shapes', () => (
    <div>
      <Button shape="bluntEdged">
        Blunt Edged Button
      </Button>
      <br /><br />
      <Button shape="sharpEdged">
        Sharp Edged Button
      </Button>
      <br /><br />
      <Button shape="capsular">
        Capsular Button
      </Button>
      <br /><br />
      <Button shape="circular">
        C
      </Button>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <Button size="small">
        Small Button
      </Button>
      <br /><br />
      <Button size="medium">
        Medium Button
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
