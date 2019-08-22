import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import Flex from '../Flex';
import View from '../View';
import Space from '../Space';

storiesOf('Button', module).addParameters({
  component: Button,
}).addParameters({
  component: Button,
})
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
    <View>
      <Space margin={[1]}>
        <Button size="large" disabled>
            Disabled Filled Button
        </Button>
      </Space>
      <Space margin={[1]}>
        <Button size="large" disabled kind="outlined">
            Disabled Outlined Button
        </Button>
      </Space>
    </View>
  ))
  .add('loading', () => (
    <View>
      <Space margin={[1]}>
        <Button size="large" block isLoading>
            Large Button
        </Button>
      </Space>
      <Space margin={[1]}>
        <Button size="large" kind="outlined" isLoading>
            Large Button
        </Button>
      </Space>
    </View>
  ));
