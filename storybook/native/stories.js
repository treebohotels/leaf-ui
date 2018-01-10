import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import Button from '../../src/components/Button/native';
import Text from '../../src/components/Text/native';
import theme from '../../src/theme/native/theme';

storiesOf('Button', module)
  // .add('playground', () => (
  //   <Button
  //     color={select('color', Object.keys(theme.color), 'green')}
  //     kind={select('kind', ['solid', 'outlined', 'transparent'], 'solid')}
  //     shape={select('shape', ['default', 'flat', 'rounded'], 'default')}
  //     size={select('size', ['small', 'regular', 'large'], 'regular')}
  //     block={boolean('block', false)}
  //     disabled={boolean('disabled', false)}
  //     light={boolean('light', false)}
  //     onClick={action('button clicked')}
  //   >
  //     <Text>{text('children', 'Default Button')}</Text>
  //   </Button>
  // ))
  .add('Default', () => (
    <Button>
      <Text>Default Button</Text>
    </Button>
  ))
  .add('Small', () => (
    <Button size="small">
      <Text>Default Button</Text>
    </Button>
  ))
  .add('Large', () => (
    <Button size="large">
      <Text>Default Button</Text>
    </Button>
  ))
  .add('Disabled', () => (
    <Button disabled>
      <Text>Disabled Button</Text>
    </Button>
  ))
  .add('Block', () => (
    <Button block>
      <Text>Block Button</Text>
    </Button>
  ))
  .add('Outlined', () => (
    <Button kind="outlined">
      <Text>Outline Button</Text>
    </Button>
  ))
  .add('Block Outlined', () => (
    <Button kind="outlined" block>
      Outline Button
    </Button>
  ))
  .add('Transparent', () => (
    <Button kind="transparent">
      <Text color="red">Transparent Button</Text>
    </Button>
  ))
  .add('Text Link', () => (
    <Button kind="transparent">
      <Text color="blue">Text Link</Text>
    </Button>
  ))
  .add('Rounded', () => (
    <Button shape="rounded">
      <Text>Rounded Button</Text>
    </Button>
  ));

storiesOf('Text', module)
  .add('Default', () => (
    <Text>Simple Text</Text>
  ))
  .add('Colored', () => (
    <Text color="blue">Blue Text</Text>
  ));
