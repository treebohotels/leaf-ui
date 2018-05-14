import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import theme from '../theme';

export default (storiesOf, {
  Flex,
  View,
  Space,
  Button,
}) =>
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
      <Flex alignItems="flex-start">
        <View>
          <Button kind="filled">
            Filled Button
          </Button>
          <Space margin={[1, 0, 0, 0]}>
            <Button kind="outlined">
              Outlined Button
            </Button>
          </Space>
        </View>
      </Flex>
    ))
    .add('shapes', () => (
      <Flex alignItems="flex-start">
        <View>
          <Button shape="bluntEdged">
            Blunt Edged Button
          </Button>
          <Space margin={[1, 0, 0, 0]}>
            <Button shape="sharpEdged">
              Sharp Edged Button
            </Button>
          </Space>
          <Space margin={[1, 0, 0, 0]}>
            <Button shape="capsular">
              Capsular Button
            </Button>
          </Space>
          <Space margin={[1, 0, 0, 0]}>
            <Button shape="circular">
              C
            </Button>
          </Space>
        </View>
      </Flex>
    ))
    .add('sizes', () => (
      <Flex alignItems="flex-start">
        <View>
          <Button size="small">
            Small Button
          </Button>
          <Space margin={[1, 0, 0, 0]}>
            <Button size="medium">
              Medium Button
            </Button>
          </Space>
          <Space margin={[1, 0, 0, 0]}>
            <Button size="large">
              Large Button
            </Button>
          </Space>
        </View>
      </Flex>
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
